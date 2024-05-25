import OnboardingForm from '@/components/CustomElements/OnboardingForm'
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const OnboardingPage = async() => {

  const user = await currentUser();
  if (!user) return redirect('/');

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect('/');

  const userData = {
    clerkId: user.id,
    firstName: userInfo?.firstName ?? user.firstName ?? "",
    lastName: userInfo?.lastName ?? user.lastName ?? "",
    image: userInfo?.profileImg ?? user.imageUrl,
    city: userInfo?.city ?? "",
    region: userInfo?.region ?? "",
    country: userInfo?.country ?? "",
    phoneNumber: userInfo?.phoneNumber ?? "",
    isStudent: userInfo?.isStudent ?? false,
    university: userInfo?.university ?? "",
  };


  return (
    <section className='w-full flex flex-col'>
        <section className="flex flex-col gap-6">
          <section className="flex flex-col items-center justify-start">
            <h1 className='font-bold text-2xl text-center mt-10 '>Onboarding</h1>
          </section>
            <section className="flex justify-center w-full">
                <OnboardingForm user={userData}/>
            </section>
        </section>
    </section>
  )
}

export default OnboardingPage