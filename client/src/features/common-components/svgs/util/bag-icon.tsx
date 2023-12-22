import { SVGProps } from "react";
export const BagIcon = ({ ref, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    aria-hidden="true"
    className="pre-nav-design-icon"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M8.25 8.25V6a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 1 1 0 4.5H3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V8.25H17.5"
    />
  </svg>
);

BagIcon.defaultProps = {
  "aria-label": `Bag Items: 0`,
  description: "Bag icon",
};
