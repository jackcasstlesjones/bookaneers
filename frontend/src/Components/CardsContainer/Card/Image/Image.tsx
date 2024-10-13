interface ImageProps {
  source: string;
}

// Image component
const Image = ({ source }: ImageProps) => {
  return <img className="mb-5 w-44" src={source} alt="" />;
};

export default Image;
