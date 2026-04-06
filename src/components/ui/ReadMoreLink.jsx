export default function ReadMoreLink({
  href = "#",
  children = "Read more",
  className = "",
  trailingWidthClassName = "w-12",
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center gap-3 text-sm font-semibold text-black transition-opacity hover:opacity-70",
        className,
      ].join(" ")}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={[
          "h-px border-b border-dashed border-black/40 transition-colors",
          trailingWidthClassName,
          "group-hover:border-black/60",
        ].join(" ")}
      />
      <span
        aria-hidden="true"
        className="text-black/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black/90"
      >
        →
      </span>
    </a>
  );
}
