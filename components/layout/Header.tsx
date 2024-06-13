import Nav from "./Nav";

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 fixed z-10 bg-background">
      <div className="container py-6 px-[16px]  mx-auto w-full flex flex-row justify-between items-center text-white">
        {/* logo */}
        <div className="flex flex-row gap-1 xl:gap-3">
          <p className="font-montserrat font-semibold text-xl  xl:text-4xl ">
            Nazri{" "}
          </p>
          <p className="font-montserrat font-semibold text-xl xl:text-4xl text-indigo-700">
            Ghazi
          </p>
        </div>

        {/* nav links */}
        <Nav />
      </div>
    </header>
  );
};

export default Header;
