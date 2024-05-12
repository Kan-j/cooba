"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { BiHomeAlt } from "react-icons/bi"
  

const CustomBreadCrumbs = () => {
  return (
    <section className="mb-4">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">
                    <BiHomeAlt size={20} />
                </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator /> */}
                {/* <BreadcrumbItem>
                <BreadcrumbLink>
                    <Link href="/components">Components</Link>
                </BreadcrumbLink>
                </BreadcrumbItem> */}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </section>
  )
}

export default CustomBreadCrumbs