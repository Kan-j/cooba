"use client"
import React, { useState } from 'react'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
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
import { Badge } from '../ui/badge'
import { IoClose } from 'react-icons/io5'

type Checked = DropdownMenuCheckboxItemProps["checked"]

const FilterAndSort = () => {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)
  const [meatAndFish, setMeatAndFish] = useState<Checked>(false)
  const [position, setPosition] = React.useState("bottom")
  return (
    <section className='w-full'>
        <section className="flex flex-col w-full gap-4">
            <section className="flex justify-between w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Select Category</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
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
                    </DropdownMenuContent>
                </DropdownMenu>


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Sort</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                    </DropdownMenu>
            </section>

            <section className="flex justify-between ">
                <section className="flex gap-2 w-1/2 overflow-x-scroll">
                    <Badge variant="outline" className='px-2 text-sm py-1 rounded-sm cursor-pointer'>Badge   <span className="pl-2"><IoClose /></span></Badge>
                    <Badge variant="outline" className='px-2 text-sm py-1 rounded-sm cursor-pointer'>Badge   <span className="pl-2"><IoClose /></span></Badge>
                    <Badge variant="outline" className='px-2 text-sm py-1 rounded-sm cursor-pointer'>Badge   <span className="pl-2"><IoClose /></span></Badge>
                    <Badge variant="outline" className='px-2 text-sm py-1 rounded-sm cursor-pointer'>Badge   <span className="pl-2"><IoClose /></span></Badge>
                </section>
                <section className="">
                    <p className=""><span className='font-bold'>25</span> Results Found</p>
                </section>
            </section>
        </section>
    </section>
  )
}

export default FilterAndSort