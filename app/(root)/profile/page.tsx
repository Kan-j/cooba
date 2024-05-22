import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import { Button } from '@/components/ui/button'
import React from 'react'

const ProfilePage = () => {
  return (
    <section className='w-full flex flex-col'>
        <CustomBreadCrumbs/>
        <section className="flex flex-col gap-6">
            <h1 className='font-bold text-xl '>Profile</h1>

            <section className="grid grid-cols-2 gap-4">
              <section className="col-span-2 md:col-span-1 flex flex-col shadow-lg rounded-md items-center px-4 py-6">
                <div className="rounded-full w-40 h-40 bg-black-main mb-2">

                </div>
                <h1 className="">Kwasi Addo Nyarko</h1>
                <Button variant='link' className='w-fit text-center'>Manage Account</Button>
                <Button variant='outline' className='w-fit text-center'>Edit Profile</Button>
              </section>
              <section className="col-span-2 md:col-span-1 flex flex-col items-start shadow-lg rounded-md px-4 py-6 md:w-1/2 w-full justify-center">
                <h1 className="pl-4 mb-2 pt-2 font-semibold">Navigation</h1>
                <Button variant={'link'}>My orders</Button>
                <Button variant={'link'}>My Shopping Cart</Button>
                <Button variant={'link'}>My Packages</Button>
                <Button variant={'link'}>Log out</Button>
              </section>
              <section className=""></section>

            </section>
        </section>
    </section>
  )
}

export default ProfilePage