"use client"
import { Label } from "@/components/ui/label";
import Image from "next/image";
import uploadIcon from "@/assets/icons/upload-02.png";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    // Add more as needed
];

const states = [
    { value: "tx", label: "Texas" },
    { value: "ca", label: "California" },
    { value: "ny", label: "New York" },
    // Add more as needed
];

const CompanyInfo = () => {
    const [agreementFile, setAgreementFile] = useState<File | null>(null);

    return (
        <div className="py-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="w-full">
                <Label htmlFor="company-name">Company name<span className="text-red-500">*</span></Label>
                <input
                    id="company-name"
                    type="text"
                    placeholder="Runyan trade center"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="company-id">Company Identifier (EIN/TIN)<span className="text-red-500">*</span></Label>
                <input
                    id="company-id"
                    type="text"
                    placeholder="12-3456789"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="job-title">Your job title<span className="text-red-500">*</span></Label>
                <input
                    id="job-title"
                    type="text"
                    placeholder="Manager"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="agreement-doc">Agreement with landlord/owner<span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-2 mt-2">
                    <label
                        htmlFor="agreement-doc"
                        className="flex gap-1.5 items-center justify-center cursor-pointer rounded-lg px-4 py-2 bg-gray-100 border-2 border-gray-200 border-dashed text-sm w-full"
                    >
                        <figure>
                            <Image src={uploadIcon} width={20} height={20} alt="Upload" />
                        </figure>
                        (PDF only)
                    </label>
                    <input
                        id="agreement-doc"
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={e => setAgreementFile(e.target.files?.[0] || null)}
                    />
                    {agreementFile && <span className="text-xs text-gray-600">{agreementFile.name}</span>}
                </div>
            </div>
            <div className="w-full">
                <Label htmlFor="country-region">Country/Region<span className="text-red-500">*</span></Label>
                <Select>
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Country/Region</SelectLabel>
                            {countries.map(c => (
                                <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="w-full">
                <Label htmlFor="street-address">Street address<span className="text-red-500">*</span></Label>
                <input
                    id="street-address"
                    type="text"
                    placeholder="111 Austin Ave"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="apt-suite">Apt, suite, unit (if applicable)</Label>
                <input
                    id="apt-suite"
                    type="text"
                    placeholder="3050"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="phone-number">Phone number<span className="text-red-500">*</span></Label>
                <input
                    id="phone-number"
                    type="tel"
                    placeholder="0000000000"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="contact-email">Contact email<span className="text-red-500">*</span></Label>
                <input
                    id="contact-email"
                    type="email"
                    placeholder="majarul2025@gmail.com"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="city-town">City/Town<span className="text-red-500">*</span></Label>
                <input
                    id="city-town"
                    type="text"
                    placeholder="Dallas"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="state-territory">State/Territory<span className="text-red-500">*</span></Label>
                <Select>
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>State/Territory</SelectLabel>
                            {states.map(s => (
                                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="w-full">
                <Label htmlFor="zip-code">Zip code<span className="text-red-500">*</span></Label>
                <input
                    id="zip-code"
                    type="text"
                    placeholder="75061"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
        </div>
    );
};

export default CompanyInfo;