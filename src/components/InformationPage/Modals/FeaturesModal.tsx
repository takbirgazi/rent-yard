import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import feature_1 from "@/assets/icons/feature/feature_1.png";
import feature_2 from "@/assets/icons/feature/feature_2.png";
import feature_3 from "@/assets/icons/feature/feature_3.png";
import feature_4 from "@/assets/icons/feature/feature_4.png";
import feature_5 from "@/assets/icons/feature/feature_5.png";
import feature_6 from "@/assets/icons/feature/feature_6.png";
import feature_7 from "@/assets/icons/feature/feature_7.png";
import feature_8 from "@/assets/icons/feature/feature_8.png";
import feature_9 from "@/assets/icons/feature/feature_9.png";
import feature_11 from "@/assets/icons/feature/feature_11.png";
import feature_12 from "@/assets/icons/feature/feature_12.png";
import feature_13 from "@/assets/icons/feature/feature_13.png";
import feature_14 from "@/assets/icons/feature/feature_14.png";
import feature_15 from "@/assets/icons/feature/feature_15.png";
import feature_16 from "@/assets/icons/feature/feature_16.png";

const FeaturesModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {
    const [selected, setSelected] = useState<number[]>([]);

    const features = [
        { id: 1, icon: feature_1.src, name: "Air conditioning" },
        { id: 2, icon: feature_2.src, name: "Cable ready" },
        { id: 3, icon: feature_3.src, name: "Ceiling fan" },
        { id: 4, icon: feature_4.src, name: "High ceilings" },
        { id: 5, icon: feature_5.src, name: "Private balcony" },
        { id: 6, icon: feature_6.src, name: "Refrigerator" },
        { id: 7, icon: feature_7.src, name: "Wooded views" },
        { id: 8, icon: feature_8.src, name: "W/D hookup" },
        { id: 9, icon: feature_9.src, name: "Hardwood Floor (home)" },
        { id: 10, icon: feature_9.src, name: "Hardwood Floor (home)" },
        { id: 11, icon: feature_11.src, name: "Fireplace (home)" },
        { id: 12, icon: feature_12.src, name: "First aid kit" },
        { id: 13, icon: feature_13.src, name: "Carbon monoxide alarm" },
        { id: 14, icon: feature_14.src, name: "Expanded patios (home)" },
        { id: 15, icon: feature_15.src, name: "Free parking on premises" },
        { id: 16, icon: feature_16.src, name: "Fire extinguisher" }
    ];

    const toggleFeature = (id: number) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
        );
    };

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto min-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Community’s amenity/features</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="pb-2">
                        <div className="w-full">
                            <Input placeholder="Search amenities" className="rounded-full w-full" />
                        </div>
                        <div className="pt-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr overflow-y-auto max-h-80">
                            {features.map(feature => {
                                const isSelected = selected.includes(feature.id);
                                return (
                                    <div key={feature.id} className="w-full">
                                        <div
                                            className={`flex items-center gap-1.5 border rounded-lg overflow-hidden px-3 py-1 cursor-pointer transition
                                            ${isSelected ? "border-[#316EED] bg-[#316ded18] " : "border-gray-400 bg-white"}`}
                                            onClick={() => toggleFeature(feature.id)}
                                        >
                                            <figure>
                                                <Image src={feature.icon} width={40} height={40} alt="Icon" />
                                            </figure>
                                            <p>{feature.name}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full flex justify-end border-t border-gray-400 pt-3">
                        <Button onClick={() => setModalOpen(0)} className="bg-blue-500 cursor-pointer text-white hover:text-black" variant="secondary">
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesModal;
