import { twMerge } from "tailwind-merge";

interface Props {
      amount: number,
      className: string
}

const PriceFormate = ({ amount, className }: Props) => {

      const forMatePrice = new Number(amount).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
      })
      return (
            <div className={twMerge("text-gray-700", className)}>
                  {forMatePrice}
            </div>
      );
};

export default PriceFormate;