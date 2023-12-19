import { ReactNode } from "react";

export const DropdownContainer = (props: { children: ReactNode }) => {
  return (
    <div className="w-full h-fit z-10 pt-4 p-10 bg-primary flex flex-nowrap">
      {props.children}
    </div>
  );
};
