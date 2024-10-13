interface TextProps {
  content: string;
}

const Text = ({ content }: TextProps) => {
  return <p className="font-normal text-lg tracking-wide">{content}</p>;
};

export default Text;
