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

      

    return (
    <section className="flex justify-between w-full">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Select Category</Button>
            </DropdownMenuTrigger>
            {/* <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
                >
                All
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                >
                Vegetables
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
                >
                Fruits
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                checked={meatAndFish}
                onCheckedChange={setMeatAndFish}
                >
                Meat and Fish
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent> */}
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
  )
}

export default FilterClientComponent