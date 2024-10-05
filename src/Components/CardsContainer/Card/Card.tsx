import Text from "./Text/Text";
import Image from "./Image/Image";

const Card = ({ source }) => {
  return (
    <div className="shadow-lg h-80 flex flex-col items-center">
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
