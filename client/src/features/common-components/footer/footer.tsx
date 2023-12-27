import { ReactNode } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@features/common-components";

export const Footer = (props: {}) => {
  return (
    <footer className="w-full h-fit bg-dark px-10 pt-10">
      <div className="flex flex-nowrap pb-4">
        <div className="flex-auto flex">
          <FooterColumn>
            <FooterLink innerText="gift cards" to="#" uppercase />
            <FooterLink innerText="find a store" to="#" uppercase />
            <FooterLink innerText="become a member" to="#" uppercase />
            <FooterLink innerText="nike x nba" to="#" uppercase />
            <FooterLink innerText="send us feedback" to="#" uppercase />
          </FooterColumn>
          <FooterColumn>
            <FooterLink innerText="get help" to="#" uppercase />
            <FooterLink innerText="Order Status" to="#" />
            <FooterLink innerText="Shipping and Delivery" to="#" />
            <FooterLink innerText="Returns" to="#" />
            <FooterLink innerText="Order Cancellation" to="#" />
            <FooterLink innerText="Payment Options" to="#" />
            <FooterLink innerText="Gift Cards Balance" to="#" />
            <FooterLink innerText="Contact Us" to="#" />
          </FooterColumn>
          <FooterColumn>
            <FooterLink innerText="about nike" to="#" uppercase />
            <FooterLink innerText="News" to="#" />
            <FooterLink innerText="Carrers" to="#" />
            <FooterLink innerText="Investors" to="#" />
            <FooterLink innerText="Purpose" to="#" />
            <FooterLink innerText="Sustainability" to="#" />
            <FooterLink innerText="Gift Cards Balance" to="#" />
            <FooterLink innerText="Contact Us" to="#" />
          </FooterColumn>
          <FooterColumn>
            <FooterLink innerText="promotions & discounts" to="#" uppercase />
            <FooterLink innerText="Student" to="#" />
            <FooterLink innerText="Military" to="#" />
            <FooterLink innerText="Teacher" to="#" />
            <FooterLink innerText="First Repounders & Medical" to="#" />
            <FooterLink innerText="Professionnals" to="#" />
            <FooterLink innerText="Birthday" to="#" />
          </FooterColumn>
        </div>

        <div className="md:w-1/4 h-fit flex justify-end">
          <FacebookIcon className="w-7.5 h-9 ml-4" />
          <TwitterIcon className="w-7.5 h-9 ml-4" />
          <InstagramIcon className="w-7.5 h-9 ml-4" />
          <YoutubeIcon className="w-7.5 h-9 ml-4" />
        </div>
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

const FooterLink = (props: {
  innerText: string;
  to: string;
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
      <a href={props.to} className="m-0">
        {props.innerText}
      </a>
    </li>
  );
};

const FooterColumn = (props: { children: ReactNode }) => {
  return (
    <div className="flex-1 px-1.5">
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
