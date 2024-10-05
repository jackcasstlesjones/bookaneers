import Link from "./Link/Link";

const Sidebar = () => {
  const linkNames = ["All Books", "Authors", "Genres"];

  return (
    <div className=" h-screen bg-slate-800 w-96">
      <div className="flex flex-col text-white gap-9 m-auto w-3/4">
        <h1 className=" text-white text-7xl mt-20 mb-20">MyLib</h1>
        {linkNames.map((element) => {
          return <Link linkText={element} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
