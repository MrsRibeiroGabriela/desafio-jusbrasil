import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  // const location = useLocation();
  return (
    <header
      data-testid="header"
      className="sticky top-0 z-30 w-full bg-white sm:px-4 px-[30px] py-[30px] lg:px-[100px] lg:py-[10px] h-[100px] flex justify-between items-center shadow-sm"
    >
      <Link to={"/"}>
        <h1 className="logo text-[25px] text-primary">
          <strong>Jus</strong>Info
        </h1>
      </Link>
      {/* {location.pathname === "/" ? null : (
          <SearchBar />
      )} */}
    </header>
  );
};

export default Header;
