import CirclePhoto from "./ui/CirclePhoto.jsx";
import DecorativeBlob from "./ui/DecorativeBlob.jsx";

const TEAM_PHOTOS = [
  {
    src: "/assets/images/Ellipse 258.png",
    alt: "Team member portrait 1",
    size: "h-16 w-16",
    pos: "left-[2%] top-8",
  },
  {
    src: "/assets/images/Ellipse 259.png",
    alt: "Team member portrait 2",
    size: "h-20 w-20",
    pos: "left-[18%] top-2",
  },
  {
    src: "/assets/images/Ellipse 260.png",
    alt: "Team member portrait 3",
    size: "h-24 w-24",
    pos: "left-[36%] top-10",
  },
  {
    src: "/assets/images/Ellipse 267.png",
    alt: "Team member portrait 4",
    size: "h-16 w-16",
    pos: "left-[56%] top-1",
  },
  {
    src: "/assets/images/Ellipse 265.png",
    alt: "Team member portrait 5",
    size: "h-20 w-20",
    pos: "left-[72%] top-9",
  },
  {
    src: "/assets/images/Ellipse 266.png",
    alt: "Team member portrait 6",
    size: "h-16 w-16",
    pos: "left-[88%] top-4",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28">
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="motion-fade-up text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl">
            The{" "}
            <span className="border-b-4 border-yellow-400 pb-0.5">
              thinkers
            </span>{" "}
            and doers were{" "}
            <span className="rounded-md bg-pink-200 px-2 py-0.5">changing</span>{" "}
            the{" "}
            <span className="rounded-md bg-green-200 px-2 py-0.5">status</span>{" "}
            quo with us
          </h1>

          <p className="motion-fade-up motion-delay-1 mx-auto mt-6 max-w-2xl text-sm leading-6 text-black/65 sm:text-base">
            We are dedicated to turning ambition into practical outcomes.
            Partner with our team to shape clearer strategies, build meaningful
            products, and make steady progress toward what matters most.
          </p>
        </div>

        <div className="relative mt-12 h-28 sm:h-32">
          {TEAM_PHOTOS.map((photo, idx) => (
            <div
              key={photo.src}
              className={`absolute motion-fade-up ${idx % 2 === 0 ? "motion-float-slow" : "motion-float-slow motion-float-delay"} ${photo.pos}`}
              style={{ animationDelay: `${120 + idx * 70}ms` }}
            >
              <CirclePhoto src={photo.src} alt={photo.alt} size={photo.size} />
            </div>
          ))}
        </div>
      </div>

      <DecorativeBlob
        variant="purple"
        className="-right-6 top-24 h-24 w-24 text-violet-500/90"
      />

      <svg
        className="pointer-events-none absolute left-0 top-44 h-24 w-24 text-rose-400/80 motion-pulse-soft sm:h-32 sm:w-32"
        viewBox="0 0 140 140"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        aria-hidden="true"
      >
        <path d="M10 100c16-40 42-40 58 0s42 40 58 0" />
      </svg>
    </section>
  );
}
