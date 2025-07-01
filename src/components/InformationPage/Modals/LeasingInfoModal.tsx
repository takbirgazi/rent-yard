import { Label } from "@/components/ui/label";
import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";



const LeasingInfoModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Leasing info</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <Label htmlFor="company-name">Leasing manager name<span className="text-red-500">*</span></Label>
                            <input
                                id="Alex johan"
                                type="text"
                                placeholder="Dallas apartments complex"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="country-region">Leasing manager Phone number<span className="text-red-500">*</span></Label>
                            <input
                                id="company-name"
                                type="text"
                                placeholder="+880"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="email">Leasing manager email<span className="text-red-500">*</span></Label>
                            <input
                                id="company-name"
                                type="email"
                                placeholder="leasing@rentyeard.com"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full flex gap-1.5 items-center mt-5">
                            <Checkbox id="terms" defaultChecked />
                            <Label htmlFor="terms">Address(same as property)</Label>
                        </div>
                    </div>
                    <div className="w-full flex justify-end border-t border-gray-400 pt-3">
                        <Button onClick={() => setModalOpen(0)} className={`bg-blue-500 cursor-pointer text-white hover:text-black`} variant="secondary">Add</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeasingInfoModal;