"use client"
import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"

  import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Badge } from '../ui/badge'
import { IoClose } from 'react-icons/io5'

const FilterClientComponent = ({allCategories}:any) => {
    type Checked = DropdownMenuCheckboxItemProps["checked"]
    const searchParams = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const router = useRouter();
    const pathname = usePathname()


    useEffect(()=>{
        setCategories(allCategories)
    },[allCategories])


    useEffect(() => {
      const initialCategories = searchParams.get('categories');
      if (initialCategories) {
        setSelectedCategories(initialCategories.split(','));
      }
    }, [searchParams]);


      const handleShowResults = (updatedCategories: string[]) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        if (updatedCategories.length > 0) {
          current.set("categories", updatedCategories.join(','));
        } else {
          current.delete("categories");
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
      };

      const handleCategoryChange = (categoryId: string) => {
        setSelectedCategories((prevSelectedCategories) => {
          const updatedCategories = prevSelectedCategories.includes(categoryId)
            ? prevSelectedCategories.filter((id) => id !== categoryId)
            : [...prevSelectedCategories, categoryId];
    
          handleShowResults(updatedCategories);
          return updatedCategories;
        });
      };

      const handleCategoryRemove = (categoryId: string) => {
        const updatedCategories = selectedCategories.filter((id) => id !== categoryId);
        setSelectedCategories(updatedCategories);
        handleShowResults(updatedCategories);
      };
      

    return (
      <section className="flex flex-col gap-2">
        <section className="flex justify-between w-full">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Select Category</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                {categories && categories.map((category:any) => (
                    <DropdownMenuCheckboxItem
                    key={category._id}
                    checked={selectedCategories.includes(category._id)}
                    onCheckedChange={() => handleCategoryChange(category._id)}
                    >
                    {category.name}
                    </DropdownMenuCheckboxItem>
                ))}
                </DropdownMenuContent>
                </DropdownMenu>
        </section>
          {selectedCategories.length > 0 && (
        <section className="flex justify-between items-baseline border-b py-2 px-2">
          <section className="flex gap-2 w-full overflow-x-scroll">
            {selectedCategories.map((categoryId: string) => {
              const category:any = categories.find((cat: any) => cat._id === categoryId);
              return category ? (
                <Badge key={categoryId} variant="outline" className='px-2 text-sm py-1 rounded-sm cursor-pointer'>
                  {category.name}
                  <IoClose className="ml-1" onClick={() => handleCategoryRemove(categoryId)} />
                </Badge>
              ) : null;
            })}
          </section>
        </section>
      )}
    </section>
  )
}

export default FilterClientComponent