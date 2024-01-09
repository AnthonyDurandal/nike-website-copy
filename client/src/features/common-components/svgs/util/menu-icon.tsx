import { SVGProps } from "react";
export const MenuIcon = ({ ref, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" aria-hidden="true" {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M21 5.25H3M21 12H3m18 6.75H3"
    />
  </svg>
);

MenuIcon.defaultProps = {
  "aria-label": "menu",
  description: "menu",
};
