import type { SVGProps } from "react";

export function ArticleArrowPrevIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={17} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M14.25 9H3.75M3.75 9L9 14.25M3.75 9L9 3.75"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArticleArrowNextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={17} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReadMoreArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M4.167 10H15.833M15.833 10L10.833 5M15.833 10L10.833 15"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
