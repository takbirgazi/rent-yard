"use client"
import SelectPropertyCard from "./SelectPropertyCard/SelectPropertyCard";
import home from "@/assets/icons/home-09.png"
import house from "@/assets/icons/house-01.png"
import building from "@/assets/icons/building-06.png"
import key from "@/assets/icons/key-02.png"
import manager from "@/assets/icons/manager.png"
import property from "@/assets/icons/property.png"
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import { useState } from "react";
import Ownership from "./Ownership/Ownership";
import Verification from "./Verification/Verification";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SelectPropertyType = () => {
    const [selectedType, setSelectedType] = useState(0);
    const [selectedRole, setSelectedRole] = useState(0);
    const path = useRouter()

    const propertyTypesData = [
        {
            id: 1,
            name: "Single House Property",
            description: "Single unit house for single family",
            image: home.src
        },
        {
            id: 2,
            name: "Apartments complex",
            description: "Multiple unit house for families",
            image: house.src
        },
        {
            id: 3,
            name: "Condominiums",
            description: "Multiple unit house for families",
            image: building.src
        },
    ];
    const roleData = [
        {
            id: 1,
            name: "Landlord",
            description: "Owner of the property",
            image: key.src
        },
        {
            id: 2,
            name: "Realtor",
            description: "Manage property on behalf on owner",
            image: manager.src
        },
        {
            id: 3,
            name: "Property management company",
            description: "For management company",
            image: property.src
        },
    ];
    const handelSubmit = () => {
        if (selectedType === 3 && (selectedRole === 1 || selectedRole === 2 || selectedRole === 3)) {
            path.push("/information");
        } else {
            toast("Please select a valid property type and role.")
        }
    }
    return (
        <div>
            <div className="space-y-8">
                <div>
                    <h2 className="font-bold text-black">Property Tye</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
                        {
                            propertyTypesData.map((property) => (
                                <SelectPropertyCard setSelected={setSelectedType} selected={selectedType} key={property.id} property={property} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-black">Select your role</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
                        {
                            roleData.map((property) => (
                                <SelectPropertyCard setSelected={setSelectedRole} selected={selectedRole} key={property.id} property={property} />
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                (selectedType === 3 && (selectedRole === 1 || selectedRole === 2 || selectedRole === 3)) && <div className="mt-8">
                    <div className="rounded-lg border overflow-hidden">
                        <div className="bg-gray-100 py-2 px-4">
                            {selectedType === 3 && selectedRole === 1 && <p>Proof of ownership</p>}
                            {selectedType === 3 && selectedRole === 2 && <p>Realtor verification</p>}
                            {selectedType === 3 && selectedRole === 3 && <p>Company & office info</p>}
                        </div>
                        <div className="py-2 px-4">
                            {selectedType === 3 && selectedRole === 1 && <Ownership />}
                            {selectedType === 3 && selectedRole === 2 && <Verification />}
                            {selectedType === 3 && selectedRole === 3 && <CompanyInfo />}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4 ml-1">
                        <Checkbox id="terms" defaultChecked />
                        <Label htmlFor="terms">Accept RentYard property adding terms & condition</Label>
                    </div>
                </div>
            }
            <div className="mt-8 flex items-center justify-between px-4">
                <p className="text-black underline font-bold cursor-pointer">Back</p>
                <Button onClick={handelSubmit} className={`${(selectedType === 3 && (selectedRole === 1 || selectedRole === 2 || selectedRole === 3)) ? "bg-blue-500 cursor-pointer" : "bg-blue-300"} text-white hover:text-black`} variant="secondary">Get Started</Button>
            </div>
        </div>
    );
};

export default SelectPropertyType;