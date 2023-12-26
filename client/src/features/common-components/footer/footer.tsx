import { ReactNode } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@features/common-components";

export const Footer = (props: {}) => {
  return (
    <footer className="w-vh h-fit bg-dark px-10 pt-10">
      <div className="flex">
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

      <FooterColumn>
        <div className="w-full h-fit flex justify-end">
          <FacebookIcon className="w-7.5 h-7.5 ml-4"/>
          <TwitterIcon className="w-7.5 h-7.5 ml-4"/>
          <InstagramIcon className="w-7.5 h-7.5 ml-4"/>
          <YoutubeIcon className="w-7.5 h-7.5 ml-4"/>
        </div>
      </FooterColumn>
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
