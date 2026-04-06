export default function SectionHeading({
  children,
  highlight,
  highlightStyle = "border-b-4 border-emerald-300 pb-0.5",
  className = "",
  as: Tag = "h2",
}) {
  const content =
    typeof children === "string" && highlight && children.includes(highlight)
      ? (() => {
          const parts = children.split(highlight);
          const before = parts[0] ?? "";
          const after = parts.slice(1).join(highlight);
          return (
            <>
              {before}
              <span className={`inline-block ${highlightStyle}`}>{highlight}</span>
              {after}
            </>
          );
        })()
      : children;

  return (
    <Tag
      className={[
        "text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl",
        className,
      ].join(" ")}
    >
      {content}
    </Tag>
  );
}

