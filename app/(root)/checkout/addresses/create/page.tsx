import { AddressForm } from '@/components/CustomElements/AddressForm'
import React from 'react'

const CreateAddress = () => {
  return (
    <section className="mt-10">
            <section className="flex w-full items-baseline justify-between mb-6">
                <h1 className="font-semibold mb-4">Add Address</h1>
                
            </section>
            
            <section className="flex flex-col">
                <AddressForm/>
            </section>
    </section>
  )
}

export default CreateAddress