import { ReactNode } from "react";
import { ConverseIcon, JordanIcon } from "../svgs";

export const HeaderLittleNav = () => {
  return (
    <div className="hidden min-w-full h-9 md:flex justify-between px-9 bg-secondary">
      <div className="h-full flex">
        <IconContainer>
          <JordanIcon className="h-6 w-6" />
        </IconContainer>
        <IconContainer>
          <ConverseIcon className="h-6 w-6" />
        </IconContainer>
      </div>
      <nav className="flex h-full text-xs gap-1">
        <HeaderLittleNavLink title="Find a Store" />
        <NavSeparator />
        <HeaderLittleNavLink title="Help" />
        <NavSeparator />
        <HeaderLittleNavLink title="Join Us" />
        <NavSeparator />
        <HeaderLittleNavLink title="Sign In" />
      </nav>
    </div>
  );
};

const HeaderLittleNavLink = (props: { title: string }) => {
  return (
    <div className="px-2 py-1 flex items-center">
      <p className="font-medium text-primary">{props.title}</p>
    </div>
  );
};

const IconContainer = (props: { children: ReactNode }) => {
  return (
    <div className="px-3 flex items-center">
      <a href="#">{props.children}</a>
    </div>
  );
};

const NavSeparator = () => {
  return <span className="flex items-center">|</span>;
};
