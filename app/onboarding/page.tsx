import OnboardingForm from '@/components/CustomElements/OnboardingForm'
import React from 'react'

const OnboardingPage = () => {
  return (
    <section className='w-full flex flex-col'>
        <section className="flex flex-col gap-6">
          <section className="flex flex-col items-center justify-start">
            <h1 className='font-bold text-2xl text-center mt-10 '>Onboarding</h1>
          </section>
            <section className="flex justify-center w-full">
                <OnboardingForm/>
            </section>
        </section>
    </section>
  )
}

export default OnboardingPage