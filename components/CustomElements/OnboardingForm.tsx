"use client"
import universitiesData from '@/lib/constants/world_universities_and_domains.json'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UserValidation } from '@/lib/validations/UserValidation'
import axios from "axios";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ChangeEvent, useEffect, useState } from "react"
import { usePathname, useRouter } from 'next/navigation'
import { useUploadThing } from '@/lib/config/uploadthing'
import { isBase64Image } from '@/lib/utils'
import { updateUser } from '@/lib/actions/user.actions'





interface OnboardingFormProps {
  user: { 
    clerkId: string; 
    _id?: string; 
    firstName: string; 
    lastName: string; 
    image: string ; 
    city: string; 
    region: string; 
    country: string; 
    phoneNumber: string; 
    isStudent: boolean; 
    university: string;  
  }}

const OnboardingForm = ({user}:OnboardingFormProps ) => {
  const [countries, setCountries] = useState<{ name: string; code: string }[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [universities, setUniversities] = useState<string[]>([]);
  const pathname = usePathname()
  const router = useRouter()
  const [files, setFiles] = useState<File[]>([])
  const {startUpload} = useUploadThing("media")


  useEffect(() => {
    // Fetch countries from restcountries.com
    axios.get("https://restcountries.com/v3.1/all")
      .then(response => {
        const countryData = response.data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        })).sort((a: any, b: any) => a.name.localeCompare(b.name));
        setCountries(countryData);
      });
  }, []);



  const fetchRegions = (countryCode: string) => {
    // Fetch geonameId from geonames.org
    axios.get(`http://api.geonames.org/searchJSON?country=${countryCode}&featureCode=PCLI&username=kanjay`)
      .then(response => {
        const data = response.data;
        if (data.geonames.length > 0) {
          const geonameId = data.geonames[0].geonameId;
          // Fetch regions using the geonameId
          axios.get(`http://api.geonames.org/childrenJSON?geonameId=${geonameId}&username=kanjay`)
            .then(response => {
              const regionNames = response.data.geonames.map((region: any) => region.name);
              setRegions(regionNames);
            });
        }
      });
  };

  const fetchUniversities = (country: string) => {
    // Filter universities based on the selected country
    const filteredUniversities = universitiesData
      .filter((university: any) => university.country === country)
      .map((university: any) => university.name)
      .sort();
    setUniversities(filteredUniversities);
  };

  const handleCountryChange = (countryName: string) => {
    
    const countryCode = countries.find(country => country.name === countryName)?.code || "";
    fetchRegions(countryCode);
    fetchUniversities(countryName);
    form.setValue("region", ""); // Reset the region value
  };




    const form = useForm<z.infer<typeof UserValidation>>({
        resolver: zodResolver(UserValidation),
        defaultValues: {
          firstName: user?.firstName || "",
          lastName: user?.lastName || "",
          city: user?.city,
          country: user?.country,
          university:user?.university,
          phoneNumber: user?.phoneNumber,
          profileImg:user?.image,
          region: user?.region,
          isStudent:user?.isStudent,
        },
      })

     
    const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string)=> void) => {
        e.preventDefault();
        
        const fileReader = new FileReader();

        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            setFiles(Array.from(e.target.files))

            if(!file.type.includes('image')) return;

            fileReader.onload = async(event)=> {
                const imageDataUrl = event.target?.result?.toString() || '';

                fieldChange(imageDataUrl)
            }

            fileReader.readAsDataURL(file)
        }
    }

      // 2. Define a submit handler.
      const onSubmit = async(values: z.infer<typeof UserValidation>) =>{
        const blob = values.profileImg ?? "";

        const hasImageChanged = isBase64Image(blob);
         
        if(hasImageChanged){
             const imgRes = await startUpload(files)
 
             if(imgRes && imgRes[0].url) {
                 values.profileImg = imgRes[0].url;
             }
        }


        await updateUser({
            firstName: values.firstName,
            lastName: values.lastName,
            image: values.profileImg,
            country: values.country,
            region: values.region,
            city: values.city,
            phoneNumber: values.phoneNumber,
            clerkId: user.clerkId,
            isStudent: values.isStudent,
            university: values.university === "Other" ? values.university : values.otherUniversity,
            path: pathname,
        })


        if(pathname === '/profile/edit'){
          router.back();
      }else{
            router.push('/')
      }
        
      }
    
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 space-y-4 w-5/6 md:w-4/5  lg:w-5/12 rounded-lg shadow-lg px-4 md:px-8 py-6">
            <FormField
              control={form.control}
              name="profileImg"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormLabel className="account-form_image-label">
                        {field.value? (
                            <Image
                            src={field.value}
                            alt="profile photo"
                            width={60}
                            height={60}
                            priority
                            className="rounded-full object-cover" />
                        ): (
                            <Image
                            src="/profile.svg" 
                            alt="profile photo"
                            width={24}
                            height={24}
                            className="object-contain" />
                        )}
                    </FormLabel>
                    <FormControl className="flex-1 text-base-semibold text-gray-200">
                        <Input
                        type="file"
                        accept="image/*"
                        placeholder="Upload a photo"
                        className="account-form_image-input"
                        onChange= {(e)=> handleImage(e, field.onChange)}
                         />
                    </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <select
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        handleCountryChange(e.target.value);
                      }}
                      className="block w-full"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Region</FormLabel>
                      <FormControl>
                        <select
                          value={field.value}
                          onChange={field.onChange}
                          className="block w-full"
                          disabled={!form.watch("country")}
                        >
                          <option value="">Select a region</option>
                          {regions.map((region) => (
                            <option key={region} value={region}>
                              {region}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
        />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isStudent"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel>Tick the box if you are a student</FormLabel>
                  <FormControl>
                  <Input
                  type="checkbox"
                  className="size-4"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("isStudent") && (
          <>
            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University</FormLabel>
                  <FormControl>
                    <select
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        if (e.target.value === "Other") {
                          form.setValue("otherUniversity", ""); // Reset other university field
                        }
                      }}
                      className="block w-full"
                      disabled={!form.watch("country")}
                    >
                      <option value="">Select a university</option>
                      {universities.map((university) => (
                        <option key={university} value={university}>
                          {university}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("university") === "Other" && (
              <FormField
                control={form.control}
                name="otherUniversity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your University</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your university name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </>
        )}
            <Button type="submit" className="w-full mt-4">Submit</Button>
          </form>
        </Form>
      )
}

export default OnboardingForm