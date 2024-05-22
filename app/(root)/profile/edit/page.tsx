import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import OnboardingForm from '@/components/CustomElements/OnboardingForm'
import React from 'react'

const EditProfile = () => {
  return (
    <section className="w-full flex flex-col">
        <section className="">
        <CustomBreadCrumbs/>
        <h1 className='font-bold text-xl '>Edit profile</h1>
        </section>
        <section className="w-full flex justify-center">
            <OnboardingForm/>
        </section>
        
    </section>
  )
}

export default EditProfile