import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import OnboardingForm from '@/components/CustomElements/OnboardingForm'
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const EditProfile = async() => {
  const user = await currentUser();
  if (!user) return redirect('/');

  const userInfo = await fetchUser(user.id);
  const userData = {
    clerkId: user.id,
    firstName: userInfo?.firstName ?? user.firstName ?? "",
    lastName: userInfo?.lastName ?? user.lastName ?? "",
    image: userInfo?.profileImg ?? user.imageUrl,
    city: userInfo?.city ?? "",
    region: userInfo?.region ?? "",
    country: userInfo?.country ?? "",
    phoneNumber: userInfo?.phoneNumber ?? "",
    isStudent: userInfo?.isStudent ?? false,
    university: userInfo?.university ?? "",
  };
  return (
    <section className="w-full flex flex-col">
        <section className="">
        <CustomBreadCrumbs/>
        <h1 className='font-bold text-xl '>Edit profile</h1>
        </section>
        <section className="w-full flex justify-center">
            <OnboardingForm user={userData} />
        </section>
        
    </section>
  )
}

export default EditProfile