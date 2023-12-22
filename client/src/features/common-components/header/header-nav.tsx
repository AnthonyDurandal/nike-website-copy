import { useState } from "react";
import {
  BagIcon,
  HeartIcon,
  NAV_DROPDOWN_SECTION,
  NavDropdown,
  NikeIcon,
  SearchIcon,
} from "@features/common-components";

export const HeaderNav = () => {
  const [navDropdownType, setNavDropdownType] =
    useState<NAV_DROPDOWN_SECTION | null>(null);

  const handleNavHover = (navType: NAV_DROPDOWN_SECTION | null) => {
    if (navDropdownType !== navType) setNavDropdownType(navType);
  };

  const [value, setValue] = useState<string>("");
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setOpenSearchBar(true);
  };

  const handleCancelSearch = () => {
    setOpenSearchBar(false);
  };

  return (
    <>
      <div className="">
        <div className="w-full md:h-16 flex items-center relative">
          <div
            className={
              openSearchBar
                ? "fixed w-screen top-0 px-4 md:px-9 flex-auto flex justify-between bg-primary"
                : "px-4 md:px-9 flex-auto flex justify-between z-10"
            }
          >
            <NikeIcon className="h-[66px] w-[68px]" />
            <div className="h-16 w-fit flex items-center">
              <div className="w-fit h-fit relative">
                <input
                  className="w-45 h-10 px-12 py-2 bg-secondary rounded-[100px] text-base focus:outline-none hover:bg-dark-gray placeholder:hover:text-dark-gray"
                  type="text"
                  value={value}
                  placeholder="Search"
                  onChange={(e) => {
                    handleChange(e.target.value);
                  }}
                />
                <span className="absolute top-0 left-0 h-full px-2 py-[6px]">
                  <SearchIcon className="w-6 h-6" />
                </span>
              </div>
              {openSearchBar ? (
                <button className="" onClick={handleCancelSearch}>
                  Cancel
                </button>
              ) : (
                <>
                  <span className="mx-3 p-2">
                    <HeartIcon className="w-6 h-6" />
                  </span>
                  <span className="p-2">
                    <BagIcon className="w-6 h-6" />
                  </span>
                </>
              )}
            </div>
          </div>
          {!openSearchBar && <Nav handleNavHover={handleNavHover} />}
        </div>
        <NavDropdown navType={navDropdownType} />
        <div id="huhu" className="h-10 w-10 bg-black absolute right-4"></div>
      </div>
    </>
  );
};

const NavLink = (props: {
  title: string;
  link?: string;
  onDragOver: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <>
      <div
        className="p-3 py-4 hover:border-b-2 border-b-current flex-wrap overflow-hidden"
        // className="flex items-center hover:border-b-2 hover:pt-[1px] border-b-current flex-wrap overflow-hidden"
        onMouseEnter={(e) => {
          props.onDragOver(e);
          console.log("hehe");
        }}
      >
        <li className="whitespace-nowrap">{props.title}</li>
      </div>
    </>
  );
};

const Nav = (props: {
  handleNavHover: (navType: NAV_DROPDOWN_SECTION | null) => void;
}) => {
  return (
    <div className="absolute w-screen h-fit flex justify-center z-0">
      <nav className="w-[calc(100%-690px)] max-w-314 mx-auto h-[60px] flexoverflow-hidden bg-primary ">
        <ul className="flex h-full">
          <NavLink
            title="New & featured"
            onDragOver={() => props.handleNavHover("NEWS_FEATURED")}
          />
          <NavLink title="Men" onDragOver={() => props.handleNavHover("MEN")} />
          <NavLink
            title="Women"
            onDragOver={() => props.handleNavHover("WOMEN")}
          />
          <NavLink
            title="Kids"
            onDragOver={() => props.handleNavHover("KIDS")}
          />
          <NavLink
            title="Accessories"
            onDragOver={() => props.handleNavHover("ACCESSORIES")}
          />
          <NavLink
            title="Sale"
            onDragOver={() => props.handleNavHover("SALE")}
          />
        </ul>
      </nav>
    </div>
  );
};
