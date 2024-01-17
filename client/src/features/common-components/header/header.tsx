import { Banner, BannerType, HeaderLittleNav, HeaderNav,  } from "@features/common-components";

const bannerData : BannerType[] = [{action:"Sign up", message:"Members: Free shipping on Orders $50+"},{action:"don't", message:"Huhu"}]  

export const Header = () => {
    return (
      <header className="font-helvetica-md">
        <HeaderLittleNav />
        <HeaderNav />
        <Banner banners={bannerData}/>
      </header>
    );
};