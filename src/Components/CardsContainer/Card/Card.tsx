import Text from "./Text/Text";
import Image from "./Image/Image";

interface CardProps {
  source: string;
}

const Card = ({ source }: CardProps) => {
  return (
    <div className="cursor-pointer shadow-lg flex flex-col items-center w-11/12 rounded-md p-7 bg-white">
      <Image source={source} />

      <div className="flex flex-col justify-between">
        <Text content={"Small Gods"} />
        <Text content={"Terry Pratchett"} />
        {/* <Text content={"!"} /> */}
      </div>
    </div>
  );
};

export default Card;
