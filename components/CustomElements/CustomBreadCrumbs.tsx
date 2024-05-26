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
import { usePathname } from "next/navigation"
import React from "react"
import { BiHomeAlt } from "react-icons/bi"
  

const CustomBreadCrumbs = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <section className="mb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <BiHomeAlt size={20} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.map((segment, index) => {
            const isFoodstuff = segment === "foodstuff";
            const path = isFoodstuff ? "/shop" : `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;

            return (
              <React.Fragment key={path}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{segment}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={path}>
                      {segment}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};
  // return (
  //   <section className="mb-4">
  //       <Breadcrumb>
  //           <BreadcrumbList>
  //               <BreadcrumbItem>
  //               <BreadcrumbLink href="/">
  //                   <BiHomeAlt size={20} />
  //               </BreadcrumbLink>
  //               </BreadcrumbItem>
  //               {/* <BreadcrumbSeparator /> */}
  //               {/* <BreadcrumbItem>
  //               <BreadcrumbLink>
  //                   <Link href="/components">Components</Link>
  //               </BreadcrumbLink>
  //               </BreadcrumbItem> */}
  //               <BreadcrumbSeparator />
  //               <BreadcrumbItem>
  //               <BreadcrumbPage>Shop</BreadcrumbPage>
  //               </BreadcrumbItem>
  //           </BreadcrumbList>
  //       </Breadcrumb>
  //   </section>
  // )
// }

export default CustomBreadCrumbs