import { SVGProps } from "react";
export const LocationIcon = ({ ref, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.5 9.001a7.5 7.5 0 1 1 15 0c0 1.205-.385 2.576-.934 3.928-.555 1.364-1.302 2.767-2.08 4.055a39.918 39.918 0 0 1-2.307 3.405c-.688.905-1.316 1.632-1.711 1.947a.75.75 0 0 1-.936 0c-.395-.315-1.023-1.042-1.711-1.947a39.916 39.916 0 0 1-2.306-3.405c-.78-1.288-1.526-2.691-2.08-4.056-.55-1.351-.935-2.722-.935-3.927zM12 12.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z"
      clipRule="evenodd"
    />
  </svg>
);

LocationIcon.defaultProps = {
    "aria-label": "location",
    "description": "location icon"
}
