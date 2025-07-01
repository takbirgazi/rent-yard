"use client"
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import AboutModal from "./Modals/AboutModal";
import AgreementModal from "./Modals/AgreementModal";
import ChargesModals from "./Modals/ChargesModals";
import FeaturesModal from "./Modals/FeaturesModal";
import InstitutionModal from "./Modals/InstitutionModal";
import LandmarkModal from "./Modals/LandmarkModal";
import LeasingInfoModal from "./Modals/LeasingInfoModal";
import NearestStationModal from "./Modals/NearestStationModal";
import ParkingModal from "./Modals/ParkingModal";
import PetFeesModal from "./Modals/PetFeesModal";
import PropertyAddressModal from "./Modals/PropertyAddressModal";
import ReminderModal from "./Modals/ReminderModal";
import UtilitiesModal from "./Modals/UtilitiesModal";
import PropertyGallery from "./PropertyGallery/PropertyGallery";
import { useState } from "react";

const InformationPage = () => {
    const route = useRouter();

    const informationData = [
        {
            id: 1,
            title: "Property address",
            required: true,
            requiredText: "Required",
        },
        {
            id: 2,
            title: "Leasing info",
            required: true,
            requiredText: "Required",
        },
        {
            id: 3,
            title: "Charges",
            required: true,
            requiredText: "Required",
        },
        {
            id: 4,
            title: "Rent frequency & payment reminder",
            required: true,
            requiredText: "Required",
        },
        {
            id: 5,
            title: "Application agreement",
            required: false,
            requiredText: "Optional",
        },
        {
            id: 6,
            title: "About the property",
            required: true,
            requiredText: "Optional",
        },
        {
            id: 7,
            title: "Community’s amenity/features",
            required: false,
            requiredText: "Optional but recommended",
        },
        {
            id: 8,
            title: "Pet fees",
            required: false,
            requiredText: "Optional, add fees if you allow pet",
        },
        {
            id: 9,
            title: "Parking",
            required: false,
            requiredText: "Optional",
        },
        {
            id: 10,
            title: "Nearest educational institution",
            required: false,
            requiredText: "Optional but recommended",
        },
        {
            id: 11,
            title: "Nearest stations",
            required: false,
            requiredText: "Optional but recommended",
        },
        {
            id: 12,
            title: "Nearest landmark",
            required: false,
            requiredText: "Optional but recommended",
        },
        {
            id: 13,
            title: "Utilities provider",
            required: false,
            requiredText: "Optional but recommended",
        }
    ];

    const videos = [
        { id: 1, name: "Video One" },
        { id: 2, name: "Video Two" },
        { id: 3, name: "Video Three" },
    ];

    const handleOnClick = () => {
        route.push("/profile-info");
    }

    const [modalOpen, setModalOpen] = useState(0);
    return (
        <div>
            <Label className="ml-1 pb-4" htmlFor="condominiums_information">Condominiums information</Label>
            <div className="flex md:flex-row flex-col md:gap-8 gap-4">
                <div className="border p-4 rounded-lg space-y-3 w-full">
                    {
                        informationData.slice(0, 7).map((item) => (
                            <div key={item.id} className={`${item.id === 7 ? "pb-0" : "pb-3 border-b-2"} flex items-center gap-2 justify-between border-gray-200`}>
                                <p className="text-sm font-medium text-black">{item.title} {item.requiredText && <span className={`${item.required ? "text-red-500" : "text-gray-700"} font-normal`}>({item.requiredText})</span>}</p>
                                <button
                                    className="text-blue-500 w-12 flex gap-0.5 justify-end font-medium text-sm cursor-pointer"
                                    onClick={() => setModalOpen(item.id)}
                                >+ <span className="underline">Add</span></button>
                            </div>
                        ))
                    }
                </div>
                <div className="border p-4 rounded-lg space-y-3 w-full">
                    {
                        informationData.slice(7).map((item) => (
                            <div key={item.id} className={`${item.id === 13 ? "pb-0" : "pb-3 border-b-2"} flex items-center gap-2 justify-between border-gray-200`}>
                                <p className="text-sm font-medium text-black">{item.title} {item.requiredText && <span className={`${item.required ? "text-red-500" : "text-gray-700"} font-normal`}>({item.requiredText})</span>}</p>
                                <button
                                    className="w-12 flex gap-0.5 justify-end text-blue-500 font-medium text-sm cursor-pointer"
                                    onClick={() => setModalOpen(item.id)}
                                >+ <span className="underline">Add</span></button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8">
                <PropertyGallery />
                <div className="w-full px-1 mt-8">
                    <Label htmlFor="country-region">Videos<span className="text-gray-700">(Optional)</span></Label>
                    <Select>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Select a video" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select a video</SelectLabel>
                                {videos.map(video => (
                                    <SelectItem key={video.id} value={video.id.toString()}>{video.name}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between px-4">
                <p className="text-black underline font-bold cursor-pointer">Back</p>
                <Button onClick={handleOnClick} className={`bg-blue-500 cursor-pointer text-white hover:text-black`} variant="secondary">Get Started</Button>
            </div>
            <PropertyAddressModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 1)} />
            <LeasingInfoModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 2)} />
            <ChargesModals setModalOpen={setModalOpen} modalOpen={(modalOpen === 3)} />
            <ReminderModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 4)} />
            <AgreementModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 5)} />
            <AboutModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 6)} />
            <FeaturesModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 7)} />
            <PetFeesModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 8)} />
            <ParkingModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 9)} />
            <InstitutionModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 10)} />
            <NearestStationModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 11)} />
            <LandmarkModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 12)} />
            <UtilitiesModal setModalOpen={setModalOpen} modalOpen={(modalOpen === 13)} />
        </div >
    );
};

export default InformationPage;