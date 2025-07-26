import React from 'react'
import OnboardingForm from './_components/OnboardingForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

const page = async() => {
  const session = await getServerSession(authOptions);
  console.log("ONBOARDED:", session?.user?.onboarded); 

  return (
    <div>
      <OnboardingForm user={{ image: session?.user?.image ?? '' }} />
    </div>
  )
}

export default page
