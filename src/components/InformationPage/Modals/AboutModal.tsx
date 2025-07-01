import { Label } from "@/components/ui/label";
import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


const AboutModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>About the property(optional)</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="w-full">
                            <Label htmlFor="terms">Upload agreement</Label>
                            <div className="mt-2">
                                <Textarea className="w-80" placeholder="Type your message here." />
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

export default AboutModal;