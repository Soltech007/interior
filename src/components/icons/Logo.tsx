import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 30"
      width="200"
      height="40"
      {...props}
    >
      <text
        x="0"
        y="15"
        fontFamily="'Playfair Display', serif"
        fontSize="20"
        fontWeight="bold"
        fill="currentColor"
      >
        <tspan fontWeight="900" fontSize="22">B</tspan>eyonds
      </text>
      <text
        x="0"
        y="28"
        fontFamily="'Roboto', sans-serif"
        fontSize="6"
        fill="currentColor"
        letterSpacing="0.5"
      >
        interior design studio
      </text>
    </svg>
  );
}
