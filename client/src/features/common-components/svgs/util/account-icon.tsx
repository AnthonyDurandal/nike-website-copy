import { SVGProps } from "react";
export const AccountIcon = ({ ref, ...props }: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 3a4.5 4.5 0 0 0-4.5 4.5H9a3 3 0 0 1 3-3V3zM7.5 7.5A4.5 4.5 0 0 0 12 12v-1.5a3 3 0 0 1-3-3H7.5zM12 12a4.5 4.5 0 0 0 4.5-4.5H15a3 3 0 0 1-3 3V12zm4.5-4.5A4.5 4.5 0 0 0 12 3v1.5a3 3 0 0 1 3 3h1.5zM4.5 21v-3H3v3h1.5zm0-3a3 3 0 0 1 3-3v-1.5A4.5 4.5 0 0 0 3 18h1.5zm3-3h9v-1.5h-9V15zm9 0a3 3 0 0 1 3 3H21a4.5 4.5 0 0 0-4.5-4.5V15zm3 3v3H21v-3h-1.5z"
    />
  </svg>
);

AccountIcon.defaultProps = {
  "aria-label": "menu",
  description: "menu",
};
