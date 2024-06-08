"use client"
import React, { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation';


const SearchBar = ({smallScreen}:{smallScreen:boolean}) => {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
    if (searchInput) {
      currentParams.set('search', searchInput);
    } else {
      currentParams.delete('search');
    }
    const search = currentParams.toString();
    const query = search ? `?${search}` : '';
    
    if (pathname === '/shop') {
        router.replace(`${pathname}${query}`);
      } else {
        router.push(`/shop${query}`);
      }
    };
    



  return (
    <section className='w-full'>
    <form onSubmit={handleSearchSubmit}>
      <label className={`h-10 w-full rounded-md items-center border border-input bg-background pl-3 text-sm ${smallScreen? 'md:hidden flex mt-2 mb-2': 'md:flex hidden'} `}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray" className="w-4 h-4 opacity-70">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
        <input 
          type="text" 
          className="grow w-full text-gray-900 px-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" 
          placeholder="Search Product ...." 
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button type='submit' className='bg-green-1 h-full px-3 rounded-r-md'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4 opacity-70">
          <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
        </svg>
        </button>
      </label>
    </form>
  </section>
  )
}

export default SearchBar