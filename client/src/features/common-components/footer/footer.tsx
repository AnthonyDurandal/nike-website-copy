import { ReactNode, useEffect, useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@features/common-components";
// import tailwindConfig from "tailwind.config";

export const Footer = (props: {}) => {
  return (
    <footer className="w-full h-fit bg-dark pt-5 px-1.5 sm:px-5  md:px-10 sm:pt-10">
      <div className="grid grid-cols-1 sm:flex sm:flex-nowrap pb-4">
        <div className="w-full grid grid-cols-1 sm:flex-auto sm:grid-cols-3 md:grid-cols-4">
          <div className="w-full px-4 py-2 sm:px-1.5 sm:py-0">
            <ul>
              <FooterListItemLink innerText="gift cards" to="#" uppercase />
              <FooterListItemLink innerText="find a store" to="#" uppercase />
              <FooterListItemLink
                innerText="become a member"
                to="#"
                uppercase
              />
              <FooterListItemLink innerText="nike x nba" to="#" uppercase />
              <FooterListItemButton
                onClick={() => {
                  console.log("show feedback modal");
                }}
                uppercase
              >
                send us feedback
              </FooterListItemButton>
            </ul>
          </div>
          <FooterColumn title="get help" to="#">
            <FooterListItemLink innerText="Order Status" to="#" />
            <FooterListItemLink innerText="Shipping and Delivery" to="#" />
            <FooterListItemLink innerText="Returns" to="#" />
            <FooterListItemLink innerText="Order Cancellation" to="#" />
            <FooterListItemLink innerText="Payment Options" to="#" />
            <FooterListItemLink innerText="Gift Cards Balance" to="#" />
            <FooterListItemLink innerText="Contact Us" to="#" />
          </FooterColumn>
          <FooterColumn title="about nike" to="#">
            <FooterListItemLink innerText="News" to="#" />
            <FooterListItemLink innerText="Carrers" to="#" />
            <FooterListItemLink innerText="Investors" to="#" />
            <FooterListItemLink innerText="Purpose" to="#" />
            <FooterListItemLink innerText="Sustainability" to="#" />
            <FooterListItemLink innerText="Gift Cards Balance" to="#" />
            <FooterListItemLink innerText="Contact Us" to="#" />
          </FooterColumn>
          <FooterColumn title="promotions & discounts" to="#">
            <FooterListItemLink innerText="Student" to="#" />
            <FooterListItemLink innerText="Military" to="#" />
            <FooterListItemLink innerText="Teacher" to="#" />
            <FooterListItemLink innerText="First Repounders & Medical" to="#" />
            <FooterListItemLink innerText="Professionnals" to="#" />
            <FooterListItemLink innerText="Birthday" to="#" />
          </FooterColumn>
        </div>

        <ul className="sm:w-1/4 h-fit flex flex-wrap sm:justify-end">
          <SocialMediaIconContainer
            icon={<FacebookIcon className="w-7.5 h-9 fill-dark-gray" />}
          />
          <SocialMediaIconContainer
            icon={<TwitterIcon className="w-7.5 h-9 fill-dark-gray" />}
          />
          <SocialMediaIconContainer
            icon={<InstagramIcon className="w-7.5 h-9 fill-dark-gray" />}
          />
          <SocialMediaIconContainer
            icon={<YoutubeIcon className="w-7.5 h-9 fill-dark-gray" />}
          />
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-xs">
        <div className="flex flex-col-reverse flex-end">
          <div className="px-2 pt-3">
            <div className="sm:flex">
              <span className="text-white">
                <a className="flex" href="#">
                  <LocationIcon className="w-4 h-4" />
                  <span className="mx-2">United States</span>
                </a>
              </span>
              <div className="pt-5 pb-6 sm:py-0 sm:ml-4">
                <span className="text-secondary">
                  © 2023 Nike, Inc. All Rights Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-end">
          <FooterBButton text="Guides" onClick={()=>{}} />
          <FooterBLink text="Terms of Sale" to="" />
          <FooterBLink text="Terms of Use" to="" />
          <FooterBLink text="Nike Privacy Policy" to="" />
          <FooterBLink text="Your Privacy Choices" to="" />
          <FooterBLink text="CA Supply Chain Act" to="" />
        </ul>
      </div>
    </footer>
  );
};

const FooterListItem = (props: {
  children: ReactNode;
  uppercase?: boolean;
}) => {
  if (props.uppercase) {
    // console.log(props.uppercase);
  }
  return (
    <li
      className={
        props.uppercase
          ? "mb-[3px] text-sm text-white uppercase font-nike-gt"
          : "mb-[3px] text-xs text-secondary"
      }
    >
      {props.children}
    </li>
  );
};

const FooterListItemLink = (props: {
  innerText: string;
  to: string;
  uppercase?: boolean;
}) => {
  return (
    <FooterListItem uppercase={props.uppercase}>
      <a href={props.to} className="m-0">
        {props.innerText}
      </a>
    </FooterListItem>
  );
};

const FooterListItemButton = (props: {
  children: ReactNode;
  uppercase?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <FooterListItem uppercase={props.uppercase}>
      <button
        onClick={props.onClick}
        className={props.uppercase ? "uppercase" : ""}
      >
        {props.children}
      </button>
    </FooterListItem>
  );
};

const FooterColumn = (props: {
  title: string;
  to: string;
  children: ReactNode | string;
}) => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(
    checkIsMobileScreen()
  ); 
  const [open, setOpen] = useState<boolean>(false);

  function checkIsMobileScreen() : boolean{
    return window.innerWidth < 600;
  }

  const handleCollapse:
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const updateM = () => {
      const mobileScreen = checkIsMobileScreen();
      const shouldUpdate: boolean = mobileScreen !== isMobileScreen; // to avoid useless re-renders
      if (shouldUpdate) {
        setIsMobileScreen(mobileScreen);
      }
    };

    window.addEventListener("resize", updateM);

    return () => window.removeEventListener('resize', updateM);
  
  }, [isMobileScreen]);

  useEffect(()=>{},[isMobileScreen])


  return (
    <>
      <div className="p-4 sm:py-0 sm:px-1.5">
        {isMobileScreen ? (
          <>
            <button
              className="w-full mb-[3px] flex justify-between text-sm uppercase text-white"
              onClick={handleCollapse}
            >
              <span className="font-nike-gt">{props.title}</span>
              {open ? <i className="">&#8722;</i> : <i className="">&#43;</i>}
            </button>
          </>
        ) : (
          <ul>
            <FooterListItemLink
              innerText={props.title}
              to={props.to}
              uppercase
            />
            {props.children}
          </ul>
        )}
      </div>
      <div className={isMobileScreen ? "py-2 px-4" : "hidden"}>
        <ul
          className={
            open
              ? "max-h-125 transition-opacity-[0.3s] transition-max-height duration-300"
              : "max-h-0 transition-opacity-[0.3s] opacity-0 overflow-hidden transition-max-height duration-500"
          }
        >
          {props.children}
        </ul>
      </div>
    </>
  );
};

const FooterC = (props: { children: ReactNode }) => {
  return (
    <li className="p-2 text-xs text-secondary whitespace-nowrap">
      {props.children}
    </li>
  );
};

const FooterBLink = (props: {text: string, to: string}) => {
  return (
    <FooterC>
      <a href={props.to}>{props.text}</a>
    </FooterC>
  );
}

const FooterBButton = (props: {text: string, onClick: React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <FooterC>
      <button onClick={props.onClick}>{props.text}</button>
    </FooterC>
  );
}

const SocialMediaIconContainer = (props: { icon: ReactNode }) => {
  return <li className="ml-4">{props.icon}</li>;
};

const FooterGuidesTooltip = () => {
  return (<div></div>)
}