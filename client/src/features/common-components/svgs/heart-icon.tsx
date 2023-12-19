import { SVGProps } from "react";
export const HeartIcon = ({ ref, ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 0-7.007A4.923 4.923 0 0 1 7.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 0 1 3.504-1.451"
    />
  </svg>
);

HeartIcon.defaultProps = {
    "aria-label": "favorites",
    "description": "favorites or like(s) icon"
}
