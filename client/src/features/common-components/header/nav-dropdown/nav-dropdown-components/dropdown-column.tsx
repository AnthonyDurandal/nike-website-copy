import { ReactNode } from "react";

export const DropdownColumn = (props: { children: ReactNode }) => {
  return (
    <div className="inline-bock flex-1 max-w-full pt-4 px-[6px] pb-0">{props.children}</div>
  );
};
