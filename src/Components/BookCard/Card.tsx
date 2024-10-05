import Text from "./Text/Text";
import Image from "./Image/Image";

const Card = () => {
  return (
    <div>
      <Image />
      <Text content={"hello"} />
      <Text content={"world"} />
      <Text content={"!"} />
    </div>
  );
};

export default Card;
