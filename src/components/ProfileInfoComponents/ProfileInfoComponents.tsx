"use client"
import React from 'react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import PriceCard from './PriceCard/PriceCard';
import { useState } from 'react';
import creditCard from "@/assets/icons/feature/credit-card.png";
import Image from 'next/image';

const ProfileInfoComponents = () => {
    const plans = [
        {
            type: 'monthly',
            options: [
                {
                    buttonLabel: "Regular",
                    price: 99.99,
                    period: "month",
                    description: "For 1-20 units"
                },
                {
                    buttonLabel: "Platinum",
                    price: 129.99,
                    period: "month",
                    description: "For 21-100 units"
                },
                {
                    buttonLabel: "Enterprise",
                    price: 199.99,
                    period: "month",
                    description: "For 101+ units"
                }
            ]
        },
        {
            type: 'annually',
            options: [
                {
                    buttonLabel: "Regular",
                    price: 499,
                    period: "year",
                    description: "For 1-20 units"
                },
                {
                    buttonLabel: "Platinum",
                    price: 899,
                    period: "year",
                    description: "For 21-100 units"
                },
                {
                    buttonLabel: "Enterprise",
                    price: 1599,
                    period: "year",
                    description: "For 101+ units"
                }
            ]
        }
    ];


    const [tab, setTab] = useState('monthly');
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <div className='mt-2'>
                <Label className="ml-1 pb-4" htmlFor="condominiums_information">Chose a plan for after 30-days free trial</Label>
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <Tabs defaultValue="monthly" value={tab} onValueChange={setTab}>
                        <TabsList>
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                            <TabsTrigger value="annually">Annually (save 57%)</TabsTrigger>
                        </TabsList>
                        {plans.map(plan => (
                            <TabsContent className='flex gap-3' value={plan.type} key={plan.type}>
                                {plan.options.map((option, idx) => (
                                    <div
                                        key={option.buttonLabel}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`rounded-lg border-2 ${tab === plan.type && activeIndex === idx ? 'border-blue-500' : 'border-gray-200'}`}
                                    >
                                        <PriceCard
                                            buttonLabel={option.buttonLabel}
                                            price={option.price}
                                            period={option.period}
                                            description={option.description}
                                        />
                                    </div>
                                ))}
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
                <div className='mt-8 shadow-xs p-4'>
                    <div className='flex items-center justify-between gap-2'>
                        <Label className='text-base'>Payment option</Label>
                        <Label className="text-blue-500 underline font-bold cursor-pointer">Add new card </Label>
                    </div>
                    <div>
                        <div className='flex justify-between items-center gap-2 py-1.5'>
                            <div className='flex items-center gap-2'>
                                <figure>
                                    <Image src={creditCard} width={20} height={20} alt='Credit Card' />
                                </figure>
                                <p>Alex jones(Amex card)</p>
                                <p className='text-gray-500'>*******8565</p>
                            </div>
                            <button className='text-white border border-blue-500 bg-blue-500 px-4 py-0.5 rounded-lg cursor-pointer'>Select</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 py-1.5'>
                            <div className='flex items-center gap-2'>
                                <figure>
                                    <Image src={creditCard} width={20} height={20} alt='Credit Card' />
                                </figure>
                                <p>Alex jones(Amex card)</p>
                                <p className='text-gray-500'>*******8565</p>
                            </div>
                            <button className='text-blue-500 border border-blue-500 px-4 py-0.5 rounded-lg cursor-pointer'>Select</button>
                        </div>
                        <div className='flex justify-between items-center gap-2 py-1.5'>
                            <div className='flex items-center gap-2'>
                                <figure>
                                    <Image src={creditCard} width={20} height={20} alt='Credit Card' />
                                </figure>
                                <p>Alex jones(Amex card)</p>
                                <p className='text-gray-500'>*******8565</p>
                            </div>
                            <button className='text-blue-500 border border-blue-500 px-4 py-0.5 rounded-lg cursor-pointer'>Select</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between px-4">
                <p className="text-black underline font-bold cursor-pointer">Back</p>
                <div className='flex justify-end items-center gap-4'>
                    <p>Total with card charge: <strong>$970</strong></p>
                    <Button className={`bg-blue-500 cursor-pointer text-white hover:text-black`} variant="secondary">Pay & add property</Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfoComponents;