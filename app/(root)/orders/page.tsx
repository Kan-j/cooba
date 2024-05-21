import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import PaginationSection from '@/components/CustomElements/PaginationSection';
import { OrdersDateFilter } from '@/components/CustomElements/OrdersDateFilter';
   
  const orders = [
    {
        orderId: "ORD001",
        date: "2024-05-01",
        amount: "₵150.00",
        itemsCount: 3,
        status: "Shipped"
    },
    {
        orderId: "ORD002",
        date: "2024-05-02",
        amount: "₵220.00",
        itemsCount: 5,
        status: "Processing"
    },
    {
        orderId: "ORD003",
        date: "2024-05-03",
        amount: "₵320.00",
        itemsCount: 7,
        status: "Delivered"
    },
    {
        orderId: "ORD004",
        date: "2024-05-04",
        amount: "₵450.00",
        itemsCount: 10,
        status: "Cancelled"
    },
    {
        orderId: "ORD005",
        date: "2024-05-05",
        amount: "₵80.00",
        itemsCount: 2,
        status: "Shipped"
    },
    {
        orderId: "ORD006",
        date: "2024-05-06",
        amount: "₵175.00",
        itemsCount: 4,
        status: "Processing"
    },
    {
        orderId: "ORD007",
        date: "2024-05-07",
        amount: "₵265.00",
        itemsCount: 6,
        status: "Delivered"
    },
    {
        orderId: "ORD008",
        date: "2024-05-08",
        amount: "₵330.00",
        itemsCount: 8,
        status: "Shipped"
    },
    {
        orderId: "ORD009",
        date: "2024-05-09",
        amount: "₵90.00",
        itemsCount: 2,
        status: "Cancelled"
    },
    {
        orderId: "ORD010",
        date: "2024-05-10",
        amount: "₵410.00",
        itemsCount: 9,
        status: "Delivered"
    }
];

const OrdersListPage = () => {
  return (
    <section className='w-full flex flex-col'>
        <CustomBreadCrumbs/>
        <section className="flex flex-col gap-6">
            <h1 className='font-bold text-xl '>Orders</h1>
            <section className="flex justify-end">
                <OrdersDateFilter/>
                
            </section>
            <section className=" ">
                <Table>
                    <TableHeader>
                        <TableRow className='font-semibold'>
                            <TableHead className="font-semibold">Order ID</TableHead>
                            <TableHead className="font-semibold">Items</TableHead>
                            <TableHead className="font-semibold">Amount</TableHead>
                            <TableHead className="text-right font-semibold">Status</TableHead>
                            <TableHead className="text-right font-semibold">Date</TableHead>
                            <TableHead className="text-right font-semibold">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                        <TableRow key={order.orderId}>
                            <TableCell className="font-medium">{order.orderId}</TableCell>
                            <TableCell>{order.itemsCount}</TableCell>
                            <TableCell>{order.amount}</TableCell>
                            <TableCell className="text-right">{order.status}</TableCell>
                            <TableCell className="text-right">{order.date}</TableCell>
                            <TableCell className="text-right">
                                <Button variant={'link'} className='text-green-1' >View Detail</Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            
            <PaginationSection/>

            </section>
        </section>
    </section>
  )
}

export default OrdersListPage