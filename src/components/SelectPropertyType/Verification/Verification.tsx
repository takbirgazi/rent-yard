"use client"
import { Label } from "@/components/ui/label";
import Image from "next/image";
import uploadIcon from "@/assets/icons/upload-02.png";
import { useState } from "react";

const Verification = () => {
    const [realtorFile, setRealtorFile] = useState<File | null>(null);
    const [agreementFile, setAgreementFile] = useState<File | null>(null);

    return (
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full">
                <Label htmlFor="licence-number">Licence number<span className="text-red-500">*</span></Label>
                <input
                    id="licence-number"
                    type="text"
                    placeholder="0000000000"
                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div className="w-full">
                <Label htmlFor="realtor-doc">Additional documents for realtor</Label>
                <div className="flex items-center gap-2 mt-2">
                    <label
                        htmlFor="realtor-doc"
                        className="flex gap-1.5 items-center justify-center cursor-pointer rounded-lg px-4 py-2 bg-gray-100 border-2 border-gray-200 border-dashed text-sm w-full"
                    >
                        <figure>
                            <Image src={uploadIcon} width={20} height={20} alt="Upload" />
                        </figure>
                        (PDF only)
                    </label>
                    <input
                        id="realtor-doc"
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={e => setRealtorFile(e.target.files?.[0] || null)}
                    />
                    {realtorFile && <span className="text-xs text-gray-600">{realtorFile.name}</span>}
                </div>
            </div>
            <div className="w-full">
                <Label htmlFor="agreement-doc">Agreement with landlord<span className="text-red-500">*</span></Label>
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
        </div>
    );
};

export default Verification;