import { HeaderLittleNav, HeaderNav } from "@features/common-components";

export const Header = () => {
    return (
      <header>
        <HeaderLittleNav />
        <HeaderNav />
        <div className="bg-secondary h-10 w-full">

        </div>
      </header>
    );
};