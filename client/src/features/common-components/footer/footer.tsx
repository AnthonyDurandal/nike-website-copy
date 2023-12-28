import { ReactNode, useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@features/common-components";
// import tailwindConfig from "tailwind.config";




export const Footer = (props: {}) => {
  // const [mobileWidth,] = useState(window.innerWidth<tailwindConfig.theme?.extend?.screens)
  // console.log(tailwindConfig.theme?.extend?.screens)

  return (
    <footer className="w-full h-fit bg-dark px-5 md:px-10 pt-10">
      <div className="flex flex-nowrap pb-4">
        <div className="flex-auto grid grid-cols-3 md:grid-cols-4">
          <div className="px-1.5">
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
                innerText="send us feedback"
                onClick={() => {
                  console.log("show feedback modal");
                }}
                uppercase
              />
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

        <ul className="sm:w-1/4 h-fit flex flex-wrap justify-end">
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
      <div className="grid grid-cols-2 text-xs">
        <div className="flex flex-col-reverse flex-end">
          <div className="px-2 pt-3">
            <div className="flex">
              <span className="text-white">
                <a className="flex" href="#">
                  <LocationIcon className="w-4 h-4" />
                  <span className="mx-2">United States</span>
                </a>
              </span>
              <span className="ml-4 text-secondary">
                © 2023 Nike, Inc. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-end">
          <FooterC text="Guides" />
          <FooterC text="Terms of Sale" />
          <FooterC text="Terms of Use" />
          <FooterC text="Nike Privacy Policy" />
          <FooterC text="Your Privacy Choices" />
          <FooterC text="CA Supply Chain Act" />
        </ul>
      </div>
    </footer>
  );
};

const FooterListItem = (props: {
  children: ReactNode;
  uppercase?: boolean;
}) => {
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
  innerText: string;
  uppercase?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <FooterListItem uppercase={props.uppercase}>
      <button
        onClick={props.onClick}
        className={props.uppercase ? "uppercase" : ""}
      >
        {props.innerText}
      </button>
    </FooterListItem>
  );
};

const FooterColumn = (props: { title:string, to: string, children: ReactNode }) => {
  return (
    <div className="px-1.5">
      {

      }
      <div className="">
        {props.title}
      </div>
      <ul>{props.children}</ul>
    </div>
  );
};

const FooterC = (props: { text: string }) => {
  return (
    <li className="p-2 text-xs text-secondary whitespace-nowrap">
      {props.text}
    </li>
  );
};

const SocialMediaIconContainer = (props: { icon: ReactNode }) => {
  return <li className="ml-4">{props.icon}</li>;
};
