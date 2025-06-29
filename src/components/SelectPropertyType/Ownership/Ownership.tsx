import { Label } from "@/components/ui/label";
import Image from "next/image";
import uploadIcon from "@/assets/icons/upload-02.png"

const Ownership = () => {
    return (
        <div className="py-2">
            <Label htmlFor="terms">Ownership doc*</Label>
            <div className="flex items-center gap-2 mt-2">
                <label
                    htmlFor="upload"
                    className="flex gap-1.5 items-center justify-center cursor-pointer rounded-lg px-4 py-2 bg-gray-100 border-2 border-gray-200 border-dashed text-sm min-w-80"
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
    );
};

export default Ownership;