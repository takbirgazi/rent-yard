import uploadIcon from "@/assets/icons/upload-02.png"
import { Label } from "@/components/ui/label";
import Image from "next/image";

const PropertyGallery = () => {
    return (
        <div className="rounded-lg border overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
                <p>Property gallery(Its not unit photo)*</p>
            </div>
            <div className="py-2 px-4 flex gap-4 mt-4">
                <div>
                    <Label htmlFor="cover-upload">Featured photos <span className="text-red-500">*</span></Label>
                    <div className="flex flex-col md:flex-row gap-2 justify-start">
                        {/* Large Cover Photo */}
                        <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-2">
                            <div className="col-span-2 row-span-2">
                                <label
                                    htmlFor="cover-upload"
                                    className="flex flex-col items-center justify-center cursor-pointer rounded-lg px-4 py-2 bg-gray-100 border-2 border-gray-200 border-dashed text-sm w-full h-full"
                                >
                                    <figure>
                                        <Image src={uploadIcon} width={32} height={32} alt="Upload" />
                                    </figure>
                                    <div className="flex flex-col items-center justify-center">
                                        <p className="text-center">Upload cover photo</p>
                                        <p className="text-xs -mt-1 text-center">(Jpg, png only)</p>
                                    </div>
                                </label>
                                <input id="cover-upload" type="file" className="hidden" />
                            </div>
                            {/* Small Gallery Photos */}
                            {[...Array(4)].map((_, idx) => (
                                <div key={idx} className="flex items-center">
                                    <label
                                        htmlFor={`gallery-upload-${idx}`}
                                        className="flex flex-col items-center justify-center cursor-pointer rounded-lg px-2 py-2 bg-gray-100 border-2 border-gray-200 border-dashed text-sm w-full h-full min-h-[80px]"
                                    >
                                        <figure>
                                            <Image src={uploadIcon} width={20} height={20} alt="Upload" />
                                        </figure>
                                    </label>
                                    <input
                                        id={`gallery-upload-${idx}`}
                                        type="file"
                                        className="hidden"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Label htmlFor="cover-upload">More photos(optional)</Label>
                    <div className="flex flex-col md:flex-row gap-2 justify-start">
                        {/* Large Cover Photo */}
                        <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-2">
                            {/* Small Gallery Photos */}
                            {[...Array(8)].map((_, idx) => (
                                <div key={idx} className="flex items-center">
                                    <label
                                        htmlFor={`gallery-upload-${idx}`}
                                        className="flex flex-col items-center justify-center cursor-pointer rounded-lg px-2 py-2 bg-gray-100 border-2 border-gray-200 border-dashed text-sm w-full h-full min-h-[80px] min-w-[80px]"
                                    >
                                        <figure>
                                            <Image src={uploadIcon} width={20} height={20} alt="Upload" />
                                        </figure>
                                    </label>
                                    <input
                                        id={`gallery-upload-${idx}`}
                                        type="file"
                                        className="hidden"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyGallery;
