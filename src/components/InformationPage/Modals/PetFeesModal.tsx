import { Label } from "@/components/ui/label";
import { ModalType } from "./ModalType";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";



const PetFeesModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {
    const countries = [
        { value: "cat", label: "Cat" },
        { value: "dog", label: "Dog" },
    ];

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Property address</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 space-y-4">
                        <div className="flex gap-4">
                            <div className="w-full">
                                <Label htmlFor="country-region">Pet type<span className="text-red-500">*</span></Label>
                                <Select>
                                    <SelectTrigger className="w-full mt-2">
                                        <SelectValue placeholder="Select a Pet type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select a Pet type</SelectLabel>
                                            {countries.map(c => (
                                                <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="w-full">
                                <Label htmlFor="zip-code">Max weight(LB)<span className="text-red-500">*</span></Label>
                                <input
                                    id="zip-code"
                                    type="text"
                                    placeholder="100"
                                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-full">
                                <Label htmlFor="zip-code">One time pet fee<span className="text-red-500">*</span></Label>
                                <input
                                    id="zip-code"
                                    type="text"
                                    placeholder="$100"
                                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                                />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="zip-code">Pet Security Deposit<span className="text-red-500">*</span></Label>
                                <input
                                    id="zip-code"
                                    type="text"
                                    placeholder="$100"
                                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                                />
                            </div>
                            <div className="w-full">
                                <Label htmlFor="zip-code">Monthly pet rent<span className="text-red-500">*</span></Label>
                                <input
                                    id="zip-code"
                                    type="text"
                                    placeholder="$100"
                                    className="mt-2 border rounded-lg px-3 py-2 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end border-t border-gray-400 pt-3">
                        <Button onClick={() => setModalOpen(0)} className={`bg-blue-500 cursor-pointer text-white hover:text-black`} variant="secondary">Add</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetFeesModal;