export default function QuestionMarkDiamond({ width = 24, height = 24, className, alt }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      alt={alt}
    >
      {/* Diamond shape */}
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Question mark */}
      <path
        d="M9.09 9C9.3251 8.33167 9.78918 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.0387C13.1255 7.15845 13.7588 7.52252 14.2151 8.06353C14.6713 8.60453 14.9211 9.30196 14.92 10C14.92 12 11.92 13 11.92 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
