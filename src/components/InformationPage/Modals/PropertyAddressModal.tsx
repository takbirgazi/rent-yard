import { Label } from "@/components/ui/label";
import { ModalType } from "./ModalType";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";



const PropertyAddressModal: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {
    const countries = [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
    ];
    const states = [
        { value: "tx", label: "Texas" },
        { value: "ca", label: "California" },
        { value: "ny", label: "New York" },
    ];

    return (
        <div className={`${modalOpen ? "flex" : "hidden"} fixed w-full top-0 left-0 justify-center items-center h-screen backdrop-blur-xs`}>
            <div className="bg-white rounded-lg border overflow-hidden mx-auto max-w-[700px]">
                <div className="bg-gray-100 py-2 px-4 flex justify-between items-center">
                    <p>Property address</p>
                    <button onClick={() => setModalOpen(0)} className="cursor-pointer">X</button>
                </div>
                <div className="py-2 px-4">
                    <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="w-full">
                            <Label htmlFor="company-name">Property name as identifier<span className="text-red-500">*</span></Label>
                            <input
                                id="company-name"
                                type="text"
                                placeholder="Dallas apartments complex"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="company-id">Total apartment unit<span className="text-red-500">*</span></Label>
                            <input
                                id="company-id"
                                type="text"
                                placeholder="50"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="job-title">Property website(optional)</Label>
                            <input
                                id="job-title"
                                type="text"
                                placeholder="https://"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="country-region">Country/Region<span className="text-red-500">*</span></Label>
                            <Select>
                                <SelectTrigger className="w-full mt-2">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Country/Region</SelectLabel>
                                        {countries.map(c => (
                                            <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="street-address">Street address<span className="text-red-500">*</span></Label>
                            <input
                                id="street-address"
                                type="text"
                                placeholder="111 Austin Ave"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="apt-suite">Apt, suite, unit (if applicable)</Label>
                            <input
                                id="apt-suite"
                                type="text"
                                placeholder="3050"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="city-town">City/Town<span className="text-red-500">*</span></Label>
                            <input
                                id="city-town"
                                type="text"
                                placeholder="Dallas"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="state-territory">State/Territory<span className="text-red-500">*</span></Label>
                            <Select>
                                <SelectTrigger className="w-full mt-2">
                                    <SelectValue placeholder="Select a state" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>State/Territory</SelectLabel>
                                        {states.map(s => (
                                            <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Label htmlFor="zip-code">Zip code<span className="text-red-500">*</span></Label>
                            <input
                                id="zip-code"
                                type="text"
                                placeholder="75061"
                                className="mt-2 border rounded-lg px-3 py-2 w-full"
                            />
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

export default PropertyAddressModal;