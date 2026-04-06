import DecorativeBlob from "./ui/DecorativeBlob.jsx";
import CirclePhoto from "./ui/CirclePhoto.jsx";
import ReadMoreLink from "./ui/ReadMoreLink.jsx";

export default function AboutSection() {
  return (
    <section id="studio" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            Tomorrow should be better than today
          </h2>

          <p className="mt-5 text-sm leading-7 text-black/65 sm:text-base">
            We are committed to building outcomes that make real progress possible.
            Through thoughtful collaboration and practical execution, we help teams
            move from ideas to measurable impact with clarity and confidence.
          </p>

          <ReadMoreLink href="#" className="mt-6" />
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <DecorativeBlob
            variant="pink"
            className="-left-8 -top-8 h-44 w-44 text-pink-200/80 blur-2xl"
          />

          <svg
            className="pointer-events-none absolute -left-16 top-1/2 h-20 w-56 -translate-y-1/2 text-rose-400/80 sm:h-24 sm:w-72"
            viewBox="0 0 320 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path d="M5 68c30-55 70-55 100 0s70 55 100 0 70-55 100 0" />
          </svg>

          <div className="relative z-10 mx-auto h-72 w-72 sm:h-80 sm:w-80">
            <CirclePhoto
              src="/assets/images/team-meeting.jpg"
              alt="Team meeting and collaboration"
              size="h-full w-full"
            />
          </div>

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
        </div>
      </div>
    </section>
  );
}
