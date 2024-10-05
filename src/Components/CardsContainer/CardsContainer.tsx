import Card from "./Card/Card";

import smallGods from "../../assets/small-gods.jpg";
import betweenTwoFires from "../../assets/between-two-fires.jpg";
import hailProjectMary from "../../assets/hail-project-mary.jpg";
import hiddenPictures from "../../assets/hidden-pictures.jpg";
import dune from "../../assets/dune.jpg";

const CardsContainer = () => {
  const images = [
    smallGods,
    betweenTwoFires,
    hailProjectMary,
    hiddenPictures,
    dune,
  ];

  return (
    <div className="flex-grow bg-gray-50">
      <div className="grid grid-cols-4 mt-40 w-11/12 m-auto gap-9 ">
        {images.map((element, index) => {
          return <Card key={index} source={element} />;
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
