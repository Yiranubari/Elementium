export default function DecorativeBlob({ variant = "purple", className = "" }) {
  const base =
    "pointer-events-none select-none absolute opacity-90 motion-float-slow " +
    className;

  if (variant === "red") {
    return (
      <svg
        className={base}
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M60 10c18 6 44 18 44 46 0 25-20 46-44 46S16 81 16 56c0-28 26-40 44-46Z"
          fill="currentColor"
          opacity="0.55"
        />
        <path
          d="M28 62c12-18 26-28 32-30 10-3 22 4 30 14 9 12 8 26-1 36-9 10-25 13-37 8-12-5-20-17-24-28Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
    );
  }

  if (variant === "pink") {
    return (
      <svg
        className={base}
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22 62c-2-22 12-38 30-46 18-8 44-1 54 16 10 17 4 45-16 61-20 16-62 10-68-31Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path
          d="M40 42c8-6 19-8 27-3 9 6 11 18 7 28-4 10-14 17-25 15-11-2-19-12-19-24 0-7 2-11 0-16Z"
          fill="currentColor"
          opacity="0.45"
        />
      </svg>
    );
  }

  // default: purple "teardrop"
  return (
    <svg className={base} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path
        d="M60 8c20 26 46 45 46 68 0 24-21 36-46 36S14 100 14 76c0-23 26-42 46-68Z"
        fill="currentColor"
      />
      <path
        d="M44 86c10 7 25 7 35-2 11-9 10-24 1-34-9-10-25-11-36-2-11 9-12 27 0 38Z"
        fill="white"
        opacity="0.35"
      />
    </svg>
  );
}
