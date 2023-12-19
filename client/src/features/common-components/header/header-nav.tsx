import { NAV_DROPDOWN_SECTION, NavDropdown, NikeIcon } from "@features/common-components";
import { useState } from "react";

export const HeaderNav = () => {
  const [navDropdownType, setNavDropdownType] = useState<NAV_DROPDOWN_SECTION | null>(null)

  const handleNavHover = (navType: NAV_DROPDOWN_SECTION | null) => {
    if(navDropdownType !== navType)
      setNavDropdownType(navType);
  };

    return (
      <>
        <div className="group">
          <nav className="flex bg-primary h-[60px] w-full md:h-16 px-4 md:px-9 relative">
            <NikeIcon className="h-[66px] w-[68px]" />
            <div className="h-full">
              <ul className="flex h-full">
                <NavLink
                  title="New & featured"
                  onDragOver={() => handleNavHover("NEWS_FEATURED")}
                />
                <NavLink title="Men" onDragOver={() => handleNavHover("MEN")} />
                <NavLink
                  title="Women"
                  onDragOver={() => handleNavHover("WOMEN")}
                />
                <NavLink
                  title="Kids"
                  onDragOver={() => handleNavHover("KIDS")}
                />
                <NavLink
                  title="Accessories"
                  onDragOver={() => handleNavHover("ACCESSORIES")}
                />
                <NavLink
                  title="Sale"
                  onDragOver={() => handleNavHover("SALE")}
                />
              </ul>
            </div>
          </nav>
          <NavDropdown navType={navDropdownType} />
          <div id="huhu" className="h-10 w-10 bg-black absolute right-4">
          </div>
        </div>
      </>
    );
};

const NavLink = (props: {
  title: string;
  link?: string;
  onDragOver: React.MouseEventHandler<HTMLDivElement>
;
}) => {
  return (
    <>
      <div
        className="flex items-center hover:border-b-2 border-b-current"
        onMouseEnter={(e) => {props.onDragOver(e); console.log("hehe") }}
      >
        <span className="">
          <li className="mx-2">{props.title}</li>
        </span>
      </div>
    </>
  );
};