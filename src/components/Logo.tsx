export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 220 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Car icon */}
      <rect x="2" y="18" width="28" height="12" rx="2" fill="white" />
      <path d="M6 18L10 10H22L26 18H6Z" fill="white" />
      <circle cx="8" cy="30" r="3" fill="#0a0a0a" stroke="white" strokeWidth="1.5" />
      <circle cx="24" cy="30" r="3" fill="#0a0a0a" stroke="white" strokeWidth="1.5" />
      <rect x="11" y="12" width="10" height="6" rx="1" fill="#0a0a0a" opacity="0.5" />
      {/* LEGENDS text */}
      <text
        x="36"
        y="26"
        fontFamily="'Courier New', monospace"
        fontSize="13"
        fontWeight="600"
        letterSpacing="2"
        fill="white"
      >
        LEGENDS
      </text>
      {/* OF CARS text */}
      <text
        x="36"
        y="37"
        fontFamily="'Courier New', monospace"
        fontSize="8"
        fontWeight="400"
        letterSpacing="4"
        fill="white"
        opacity="0.6"
      >
        OF CARS
      </text>
    </svg>
  );
};
