function DecorativeTriangles() {
  return (
    <>
      <svg
        className="pointer-events-none absolute -bottom-1 -left-3 h-12 w-12 text-rose-400"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 90L90 90L10 10Z" />
      </svg>

      <svg
        className="pointer-events-none absolute -right-4 top-4 h-10 w-10 text-rose-300"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 88L88 88L12 12Z" />
      </svg>
    </>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative z-10 mx-auto h-72 w-72 rounded-full bg-white p-2 shadow-lg sm:h-80 sm:w-80">
            <img
              src="/assets/images/team-working.jpg"
              alt="Team working together at desk"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <DecorativeTriangles />
        </div>

        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            See how we can help you progress
          </h2>

          <p className="mt-5 text-sm leading-7 text-black/65 sm:text-base">
            Our team supports your next move with focused strategy, thoughtful
            design, and practical delivery. We partner closely with you to remove
            friction, accelerate momentum, and keep progress sustainable.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-70"
          >
            Read more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
