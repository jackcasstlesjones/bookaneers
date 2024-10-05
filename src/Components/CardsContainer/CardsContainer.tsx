import Card from "./Card/Card";

import smallGods from "../../assets/small-gods.jpg";
import betweenTwoFires from "../../assets/between-two-fires.jpg";

const CardsContainer = () => {
  const images = [smallGods, betweenTwoFires];

  return (
    <div className="flex-grow">
      <div className="grid grid-cols-4 mt-40 w-3/4 m-auto">
        {images.map((element, index) => {
          return <Card key={index} source={element} />;
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
