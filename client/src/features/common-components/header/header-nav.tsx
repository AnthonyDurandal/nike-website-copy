import { NikeIcon, NavDropdown, NAV_DROPDOWN_SECTION } from "@features/common-components";
import { ReactNode, useState } from "react";

export const HeaderNav = () => {
  const [navDropdownType, setNavDropdownType] = useState<NAV_DROPDOWN_SECTION | null>(null)

  const handleNavHover = (navType: NAV_DROPDOWN_SECTION | null) => {
    setNavDropdownType(navType);
    console.log('pute')
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
          {/* <DropdownNav /> */}
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
        {/* <div className="w-10 h-10 bg-black absolute bottom-0"></div> */}
      </div>
    </>
  );
};

const DropdownNav = () => {
  return (
    <div className="bg-slate-50">
      <div className=" h-10-w-10 bg-black"></div>
      <div className="relative">
        <div className="group-hover:block absolute top-0 w-10 h-10 hidden bg-orange-900 z-50">
          text pr eh
        </div>
      </div>
    </div>
  );
}