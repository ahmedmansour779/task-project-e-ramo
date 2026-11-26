import type { SVGProps } from "react";

interface CheckCircleIconProps extends SVGProps<SVGSVGElement> {
  featured?: boolean;
}

export function CheckCircleIcon({ featured = false, ...props }: CheckCircleIconProps) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <circle cx={10} cy={10} r={10} fill={featured ? "#F9F8F6" : "#365327"} />
      <path
        d="M6.2 10.3L8.7 12.8L13.9 7.5"
        stroke={featured ? "#365327" : "#F9F8F6"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlanBasicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M33.25 4.75L17.4167 20.5833M33.25 4.75L22.1667 33.25L17.4167 20.5833M33.25 4.75L4.75 15.8333L17.4167 20.5833"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlanPopularIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M19 4.75L23.2 13.3L32.6 14.7L25.8 21.3L27.4 30.7L19 26.2L10.6 30.7L12.2 21.3L5.4 14.7L14.8 13.3L19 4.75Z"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlanEnterpriseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M6.333 33.25H31.667M9.5 33.25V9.5C9.5 7.75 10.917 6.333 12.667 6.333H22.167C23.917 6.333 25.333 7.75 25.333 9.5V33.25M25.333 15.833H28.5C29.375 15.833 30.083 16.542 30.083 17.417V33.25M14.25 12.667H15.833M19 12.667H20.583M14.25 19H15.833M19 19H20.583M15.833 33.25V26.917H19V33.25"
        stroke="currentColor"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PopularBadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M12 2L14.6 8.6L21.7 9.2L16.3 13.9L17.9 20.8L12 17.1L6.1 20.8L7.7 13.9L2.3 9.2L9.4 8.6L12 2Z"
        fill="#E7CAAA"
      />
    </svg>
  );
}

export function SupportHeadsetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M3.333 11.667V10C3.333 6.318 6.318 3.333 10 3.333C13.682 3.333 16.667 6.318 16.667 10V11.667M3.333 11.667C2.413 11.667 1.667 12.413 1.667 13.333V14.167C1.667 15.087 2.413 15.833 3.333 15.833H5V11.667H3.333ZM16.667 11.667C17.587 11.667 18.333 12.413 18.333 13.333V14.167C18.333 15.087 17.587 15.833 16.667 15.833H15V11.667H16.667ZM15 15.833C15 17.214 13.881 18.333 12.5 18.333H10.833"
        stroke="#365327"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
