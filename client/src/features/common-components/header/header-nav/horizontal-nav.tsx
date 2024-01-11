import { NAV_DROPDOWN_SECTION, NavLink } from "@features/common-components";

export const HorizontalNav = (props: {
  handleNavHover: (navType: NAV_DROPDOWN_SECTION | null) => void;
}) => {
  return (
    <div className="hidden absolute w-screen h-fit md:flex justify-center z-0">
      <nav className="w-[calc(100%-690px)] max-w-314 mx-auto h-[60px] overflow-hidden bg-primary ">
        <ul className="flex flex-wrap justify-center h-full">
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
