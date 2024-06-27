import CustomBreadCrumbs from "@/components/CustomElements/CustomBreadCrumbs";
import { FaTruck } from "react-icons/fa";
import { IoCard, IoLocation } from "react-icons/io5";

export default function CheckoutAddressesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
          <section className='w-full flex flex-col'>
            <CustomBreadCrumbs/>
                <section className="flex flex-col gap-6">
                    <h1 className='font-bold text-xl '>Checkout</h1>
                    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
                        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                <IoLocation className="size-3 md:size-4 me-2" color={'blue-600'} /> 
                                Address <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                            </span>
                        </li>
                        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                <FaTruck className="size-3 md:size-4 me-2" />
                                Delivery <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <IoCard className="size-3 md:size-4 me-2" />
                            Payment
                        </li>
                    </ol>
                </section>
                
                <section className="">
                    {children}
                </section>
            </section>

    );
  }