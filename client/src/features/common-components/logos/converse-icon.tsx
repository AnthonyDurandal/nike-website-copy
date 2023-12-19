import { SVGProps } from "react";
export const ConverseIcon = ({ ref, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 8.719 7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
      clipRule="evenodd"
    />
  </svg>
);

ConverseIcon.defaultProps = {
    "aria-labelledby": "converse-brand-logo",
    "aria-describedby": "logo of the Converse brand"
}
