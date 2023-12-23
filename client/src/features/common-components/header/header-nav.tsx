import { ReactNode, useState } from "react";
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
        <div className="w-screen md:h-16 flex items-center relative">
          <div
            className={
              openSearchBar
                ? "fixed w-screen top-0 px-4 bg-primary"
                : "w-full z-10"
            }
          >
            <div
              className={
                openSearchBar
                  ? "w-full h-10 pt-2.5 px-4 md:px-9 flex justify-between items-center"
                  : "px-4 md:px-9 flex-auto flex justify-between"
              }
            >
              <NikeIcon className="h-[66px] w-[68px]" />
              <div
                className={
                  openSearchBar
                    ? "h-fit w-fit flex items-center"
                    : "h-16 w-fit flex items-center"
                }
              >
                <div className="w-fit h-fit relative">
                  <input
                    className={
                      openSearchBar
                        ? "md:w-164 h-10 px-12 py-2 bg-secondary rounded-[100px] text-base focus:outline-none hover:bg-dark-gray placeholder:hover:text-dark-gray"
                        : "w-45 h-10 px-12 py-2 bg-secondary rounded-[100px] text-base focus:outline-none hover:bg-dark-gray placeholder:hover:text-dark-gray"
                    }
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
                {!openSearchBar && (
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
              {openSearchBar && (
                <button className="" onClick={handleCancelSearch}>
                  Cancel
                </button>
              )}
            </div>
            {/* {openSearchBar && <PopularSearch />} */}
            {openSearchBar && <TopSuggestions />}
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

const SearchResultContainer = (props: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        props.className ? `px-8 pt-12 ${props.className}` : "px-8 pt-12"
      }
    >
      {props.children}
    </div>
  );
};

const PopularSearch = () => {
  return (
    <SearchResultContainer className="px-8 pt-12">
      <div className="md:w-164">
        <span className="text-base text-secondary">
          <p className="pb-4">Popular Search Terms</p>
        </span>
        <ul>
          <PopularSearchLink>Air Force 1</PopularSearchLink>
          <PopularSearchLink>Jordan</PopularSearchLink>
          <PopularSearchLink>Air Max</PopularSearchLink>
          <PopularSearchLink>Bazer</PopularSearchLink>
        </ul>
      </div>
    </SearchResultContainer>
  );
};

const PopularSearchLink = (props: { children: string; link?: string }) => {
  return <li className="text-xl text-primary">{props.children}</li>;
};

const TopSuggestions = () => {
  return (
    <SearchResultContainer>
      <div className="w-1/6 pr-5 text-secondary flex flex-col">
        <p className="pb-4">Top Suggestions</p>
        <TopSuggestion suggestion="dd2795602" textSearch="dd" />
        <TopSuggestion
          suggestion="nike womens dunk high wmns dd1869"
          textSearch="dd"
        />
      </div>
    </SearchResultContainer>
  );
};

const TopSuggestion = (props: { suggestion: string; textSearch: string }) => {
  // pls future me find a name for this component more descriptive
  const textArray = splitWithSeparator(props.suggestion, props.textSearch);
  return (
    <span className="text-xl">
      <p className="pb-3">
        {textArray.map((textPart) => (
          <span
            className={
              textPart.localeCompare(props.textSearch) === 0
                ? "text-primary"
                : "text-secondary"
            }
          >
            {textPart}
          </span>
        ))}
      </p>
    </span>
  );
};

const splitWithSeparator = (text: string, separator: string): string[] => {
  if (separator.length === 0) return [text];
  const result = [""];
  const res: string[] = text.split("");
  const textLength = text.length;
  const separatorLenght = separator.length;
  let strIndex = 0;
  while (strIndex < textLength) {
    if (
      text
        .substring(strIndex, strIndex + separatorLenght)
        .localeCompare(separator) === 0
    ) {
      result.push(separator);
      strIndex = strIndex + separatorLenght;
    } else {
      if (result[result.length - 1].localeCompare(separator) === 0)
        result.push("");
      result[result.length - 1] = result[result.length - 1] + res[strIndex];
      strIndex++;
    }
  }
  return result;
};
