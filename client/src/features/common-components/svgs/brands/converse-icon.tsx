import { SVGProps } from "react";
export const ConverseIcon = ({ ref, ...props }: SVGProps<SVGSVGElement>) => (
  <svg fill="#111" viewBox="0 0 39 33" {...props}>
    <path d="m10.94 25.626-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239 13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z" />
  </svg>
);

ConverseIcon.defaultProps = {
    "aria-labelledby": "converse-brand-logo",
    "aria-describedby": "logo of the Converse brand"
}
