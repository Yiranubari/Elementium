import { useState } from "react";
import CirclePhoto from "./ui/CirclePhoto.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";

const CLIENT_PHOTOS = [
  {
    src: "/assets/images/Ellipse 256.png",
    alt: "Client portrait 1",
    size: "h-14 w-14",
    pos: "left-0 top-6",
  },
  {
    src: "/assets/images/Ellipse 257.png",
    alt: "Client portrait 2",
    size: "h-16 w-16",
    pos: "left-6 bottom-4",
  },
  {
    src: "/assets/images/Ellipse 258.png",
    alt: "Client portrait 3",
    size: "h-20 w-20",
    pos: "right-0 top-4",
  },
  {
    src: "/assets/images/Ellipse 259.png",
    alt: "Client portrait 4",
    size: "h-14 w-14",
    pos: "right-10 bottom-2",
  },
  {
    src: "/assets/images/Ellipse 260.png",
    alt: "Client portrait 5",
    size: "h-12 w-12",
    pos: "left-1/2 -translate-x-1/2 -top-6",
  },
];

export default function TestimonialSection() {
  const [activeIndex] = useState(0);

  return (
    <section id="testimonials" className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading
            as="h2"
            highlight="says About Us"
            className="text-2xl sm:text-3xl"
          >
            What our customer says About Us
          </SectionHeading>
        </div>

        <div className="relative mt-10 flex justify-center">
          <div className="relative w-full max-w-3xl rounded-3xl bg-slate-100 px-6 py-10 text-left shadow-sm sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -top-8 left-6 text-6xl text-emerald-300 sm:text-7xl">
              <span aria-hidden="true">“</span>
            </div>

            <p className="text-sm leading-7 text-black/70 sm:text-base">
              Elementium enabled our team to move from scattered ideas to a
              clear, confident plan. Their thoughtful guidance and collaborative
              approach meant every decision felt intentional, and every
              iteration brought us closer to the outcomes we actually care
              about.
            </p>

            <div className="mt-6 text-sm font-semibold text-black">
              Alex Carter
              <span className="ml-2 text-black/60">
                Founder, Northline Studio
              </span>
            </div>

            <p className="mt-1 text-xs uppercase tracking-wide text-black/50">
              Based on feedback from customer #{activeIndex + 1}
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0">
            {CLIENT_PHOTOS.map((photo) => (
              <div key={photo.src} className={`absolute ${photo.pos}`}>
                <CirclePhoto
                  src={photo.src}
                  alt={photo.alt}
                  size={photo.size}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
