import { Label } from "@/components/ui/label";
import { ModalType } from "./ModalType";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import uploadIcon from "@/assets/icons/upload-02.png"


const AgreementModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Application agreement(optional)</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="w-full">
                            <Label htmlFor="terms">Upload agreement</Label>
                            <div className="flex items-center gap-2 mt-2">
                                <label
                                    htmlFor="upload"
                                    className="flex gap-1.5 items-center justify-center cursor-pointer rounded-lg px-4 py-2 bg-gray-100 border-2 border-gray-200 border-dashed text-sm w-full"
                                >
                                    <figure>
                                        <Image src={uploadIcon} width={20} height={20} alt="Upload" />
                                    </figure>
                                    (Pdf only)
                                </label>
                                <input
                                    id="upload"
                                    type="file"
                                    className="hidden"
                                />
                            </div>
                        </div>
                        <div className="w-full flex gap-1.5 items-center">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept immigrant & international student application</Label>
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

export default AgreementModal;