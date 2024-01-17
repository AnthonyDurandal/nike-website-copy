import { ReactNode } from "react";

export const SvgButton = (props: { children: ReactNode, onClick?:() =>{}, className?:string }) => {
  return (
    <span
      className={
        props.className
          ? `${props.className} h-fit rounded-full hover:bg-mid-gray`
          : "h-fit rounded-full hover:bg-mid-gray"
      }
    >
      {props.children}
    </span>
  );
};
