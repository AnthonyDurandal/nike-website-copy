import { ReactNode } from "react";
import { ConverseIcon, JordanIcon } from "../logos";

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
      <nav className="flex h-full text-xs gap-2">
        <HeaderLittleNavLink title="Find a Store" />
        <HeaderLittleNavLink title="Help" />
        <HeaderLittleNavLink title="Join Us" />
        <HeaderLittleNavLink title="Sign In" />
      </nav>
    </div>
  );
};

const HeaderLittleNavLink = (props: {title: string}) => {
    return (
      <div className="px-2 flex items-center">
        <p className="font-bold text-primary">{props.title}</p>
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