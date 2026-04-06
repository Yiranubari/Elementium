import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "#D4E8D8" }}
    >
      <svg
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 text-violet-500/90 sm:h-36 sm:w-36"
        viewBox="0 0 120 120"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M60 6c12 24 40 34 40 62 0 25-20 46-45 46S10 92 10 67c0-28 28-38 50-61z" />
      </svg>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
          Subscribe to our newsletter
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
          Get practical updates, fresh insights, and actionable ideas from our
          team delivered straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="h-11 w-full rounded-lg border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35"
          />

          <button
            type="submit"
            className="h-11 rounded-lg bg-black px-6 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
}

