import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const UtilitiesModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {
    const selectData = [
        {
            id: 1,
            val: "Select One"
        },
        {
            id: 2,
            val: "Select Two"
        },
    ];
    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Utilities provider</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <Label htmlFor="country-region">Utility type<span className="text-red-500">*</span></Label>
                            <div className="border rounded-lg my-2 px-2 text-sm flex justify-between items-center text-gray-500">
                                <Select>
                                    <SelectTrigger className="w-full border-0">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {selectData.map(data => (
                                                <SelectItem key={data.id} value={data.val}>{data.val}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="country-region">Provider company name<span className="text-red-500">*</span></Label>
                            <div className="border rounded-lg my-2 px-2 text-sm flex justify-between items-center text-gray-500">
                                <Input className="border-0 focus-visible:ring-0" placeholder="Enter Name" />
                            </div>
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

export default UtilitiesModal;