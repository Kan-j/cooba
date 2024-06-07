"use client"
import React from 'react'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

const PaginationSection = ({NextPageExists, PrevPageExists, totalPages, currentPage}:any) => {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const getPageHref = (page: number) => `?page=${page}`;

  return (
    <section className="mt-6">
       <Pagination>
      <PaginationContent>
        <PaginationItem>
            <PaginationPrevious 
              href={PrevPageExists ? getPageHref(currentPage - 1) : '#'} 
              isActive={PrevPageExists} 
            />
        </PaginationItem>
        {pagesArray.map((pageIndex) => (
            <PaginationItem key={pageIndex}>
              <PaginationLink href={`?page=${pageIndex}`} isActive={pageIndex === currentPage}>
                {pageIndex}
              </PaginationLink>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext 
              href={NextPageExists ? getPageHref(currentPage + 1) : '#'} 
              isActive={NextPageExists} 
            />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </section>
  )
}


export default PaginationSection