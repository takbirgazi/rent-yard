import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import cvv from "@/assets/icons/feature/cvv.png"
import careditCard from "@/assets/icons/feature/mastercard.png"
import Image from "next/image";

interface ModalType {
    modalOpen: boolean,
    setModalOpen: (data: boolean) => void
}

const AddNewCardModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Add new card</p>
                    <button onClick={() => setModalOpen(false)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <Label htmlFor="country-region">Name on card</Label>
                            <div className="border rounded-lg my-2 px-2 text-sm flex justify-between items-center text-gray-500">
                                <Input className="border-0 focus-visible:ring-0" placeholder="Alex jones" />
                            </div>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="country-region">Card number</Label>
                            <div className="border rounded-lg my-2 px-2 text-sm flex justify-between items-center text-gray-500">
                                <Input className="border-0 focus-visible:ring-0" placeholder="0000  0000  0000  0000" />
                                <figure>
                                    <Image src={careditCard} alt="CVV" width={20} height={20} />
                                </figure>
                            </div>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="country-region">Expire date</Label>
                            <div className="border rounded-lg my-2 px-2 text-sm flex justify-between items-center text-gray-500">
                                <Input className="border-0 focus-visible:ring-0" placeholder="MM/YY" />
                            </div>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="country-region">CVC</Label>
                            <div className="border rounded-lg my-2 px-2 text-sm flex justify-between items-center text-gray-500">
                                <Input className="border-0 focus-visible:ring-0" placeholder="123" />
                                <figure>
                                    <Image src={cvv} alt="CVV" width={20} height={20} />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-end border-t border-gray-400 pt-3">
                        <Button onClick={() => setModalOpen(false)} className={`bg-blue-500 cursor-pointer text-white hover:text-black`} variant="secondary">Add</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewCardModal;