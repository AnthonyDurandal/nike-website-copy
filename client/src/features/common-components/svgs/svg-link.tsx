import { ReactNode } from "react";

export const SvgLink = (props: {
  children: ReactNode;
  to: string;
  className?: string;
}) => {
  return (
    <a
      href="#"
      className={
        props.className
          ? `${props.className} h-fit rounded-full hover:bg-mid-gray`
          : "h-fit rounded-full hover:bg-mid-gray"
      }
    >
      {/* <span
        className={
          props.className
            ? `${props.className} h-fit rounded-full hover:bg-mid-gray`
            : "h-fitrounded-full hover:bg-mid-gray"
        }
      > */}
      {props.children}
      {/* </span> */}
    </a>
  );
};
