import Image from "next/image";
import { SelectPropertyTypes } from "./SelectPropertyTypes";

interface SelectPropertyCardProps {
    property: SelectPropertyTypes;
    selected: number;
    setSelected: (data: number) => void;
}

const SelectPropertyCard: React.FC<SelectPropertyCardProps> = ({ property, selected, setSelected }) => {
    return (
        <div
            onClick={() => setSelected(property.id)}
            className={`border flex cursor-pointer items-center gap-2 rounded-lg py-2 px-4 md:py-4 md:px-8 ${selected == property.id ? "border-blue-500" : ""
                }`}
        >
            <div>
                <figure>
                    <Image className="w-10 h-10" src={property.image} alt={property.name} height={50} width={50} />
                </figure>
            </div>
            <div className="grow space-y-1">
                <h4 className="font-medium">{property.name}</h4>
                <p className="font-light">{property.description}</p>
            </div>
        </div>
    );
};

export default SelectPropertyCard;