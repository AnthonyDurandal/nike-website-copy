import { ReactNode } from "react";

export const DropdownColumn = (props: { children: ReactNode }) => {
  return <div className="pt-4 px-1 pb-0">{props.children}</div>;
};
