import { Label } from "@/components/ui/label";
import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import iIcon from "@/assets/icons/information-circle.png";

const ChargesModals: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Charges</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <Label htmlFor="company-name">Application fee(one-time)<span className="text-red-500">*</span></Label>
                            <input
                                id="Alex johan"
                                type="text"
                                placeholder="100"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="country-region">Admin fee(one-time)<span className="text-red-500">*</span></Label>
                            <input
                                id="company-name"
                                type="text"
                                placeholder="15"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center border-t border-gray-400 pt-3">
                        <div className="flex items-center gap-0.5">
                            <figure>
                                <Image className="w-4 h-4" src={iIcon} alt="Icon" width={20} height={20} />
                            </figure>
                            <p className="text-xs">Type 0 if charges not applicable</p>
                        </div>
                        <Button onClick={() => setModalOpen(0)} className={`bg-blue-500 cursor-pointer text-white hover:text-black`} variant="secondary">Add</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChargesModals;