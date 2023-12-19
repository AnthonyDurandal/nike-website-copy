import { NAV_DROPDOWN_SECTION, NavDropdownNews } from "@features/common-components";

export const NavDropdown = (props : {navType: NAV_DROPDOWN_SECTION | null}) => {
  switch (props.navType) {
    case "NEWS_FEATURED":
      return <NavDropdownNews />;
    default:
        return null
    //   throw new Error("navType required for NavDropdown", {
    //     cause: "no 'navType' provided when rendering NavDropdown",
    //   });
  };
};
