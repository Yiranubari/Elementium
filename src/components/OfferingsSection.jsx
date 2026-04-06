const DEFAULT_ITEMS = [
  { label: "We can help", title: "Weigh options together" },
  { label: "We offer", title: "Collaborative strategy" },
  { label: "We can", title: "Practical execution plans" },
];

export default function OfferingsSection({ items = DEFAULT_ITEMS }) {
  return (
    <section id="offerings" className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            What we{" "}
            <span className="inline-block border-b-4 border-emerald-300 pb-0.5">
              can
            </span>{" "}
            <span className="inline-block border-b-4 border-emerald-300 pb-0.5">
              offer
            </span>{" "}
            you!
          </h2>

          <svg
            className="pointer-events-none absolute left-1/2 top-full h-10 w-56 -translate-x-1/2 text-rose-400"
            viewBox="0 0 320 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path d="M10 40c40-30 70-30 110 0s70 30 110 0 70-30 90-20" />
          </svg>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-black/10 bg-white">
          {items.slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${item.title}-${idx}`}
              className="grid grid-cols-3 items-center gap-4 px-6 py-4 sm:px-8"
              style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
            >
              <div className="text-sm font-semibold text-black/70">{item.label}</div>
              <div className="text-sm font-semibold text-black/90 text-center sm:text-left">
                {item.title}
              </div>
              <div className="flex justify-end">
                <span
                  aria-hidden="true"
                  className="text-lg font-semibold text-black/60"
                >
                  →
                </span>
              </div>
              {idx !== 2 ? (
                <div
                  className="col-span-3 mt-2 border-t border-black/10"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

