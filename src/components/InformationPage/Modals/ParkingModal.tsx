import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const ParkingModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {
    const parkingTime = [
        {
            id: 1,
            time: "2H"
        },
        {
            id: 2,
            time: "3H"
        },
        {
            id: 3,
            time: "4H"
        },
    ]
    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Parking</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="w-full">
                            <div className="border rounded-lg my-2 py-1 px-2 text-sm flex justify-between items-center text-gray-500">
                                <p>Guest vehicle parking time</p>
                                <Select>
                                    <SelectTrigger className="w-20">
                                        <SelectValue placeholder="2H" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {parkingTime.map(time => (
                                                <SelectItem key={time.id} value={time.time}>{time.time}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="mt-2">
                                <Textarea className="w-80" placeholder="Write parking overview" />
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

export default ParkingModal;