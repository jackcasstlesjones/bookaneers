import { useEffect, useState } from "react";
import Card from "./Card/Card";

const images = import.meta.glob("../../assets/*.jpg"); // Adjust the glob pattern if necessary

const CardsContainer = () => {
  const imagePaths = Object.keys(images).map((key) => {
    return images[key](); // This returns a promise
  });

  // Since imagePaths is an array of promises, we can use Promise.all to resolve them
  const [resolvedImages, setResolvedImages] = useState<string[]>([]);

  useEffect(() => {
    Promise.all(imagePaths).then((resolved) => {
      setResolvedImages(resolved.map((img) => img.default)); // Access the default export
    });
  }, []);

  return (
    <div className="flex-grow bg-gray-50">
      <div className="grid grid-cols-4 mt-40 w-11/12 m-auto gap-9 ">
        {resolvedImages.map((element, index) => (
          <Card key={index} source={element} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
