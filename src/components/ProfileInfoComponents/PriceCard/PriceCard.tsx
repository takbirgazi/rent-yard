import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface PriceCardProps {
    buttonLabel: string;
    price: number | string;
    period: string;
    description: string;
}

const PriceCard = ({ buttonLabel, price, period, description }: PriceCardProps) => {
    return (
        <div className="border rounded-sm border-gray-300 cursor-pointer p-4 min-w-80">
            <div>
                <Button variant="outline">{buttonLabel}</Button>
            </div>
            <div className="py-5">
                <Label className="text-5xl">
                    <span>${price}</span>
                    <sub className="-ml-2 mt-2 text-sm">/{period}</sub>
                </Label>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default PriceCard;