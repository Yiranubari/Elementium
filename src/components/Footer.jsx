const companyLinks = ["About", "Studio", "Services", "FAQs"];
const policyLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
];
const socialLinks = ["Instagram", "LinkedIn", "X (Twitter)", "YouTube"];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-black/10 py-12 sm:py-14"
      style={{ backgroundColor: "#D4E8D8" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-black">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-black/70 transition-all duration-300 hover:translate-x-0.5 hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black">
              Terms & Policies
            </h3>
            <ul className="mt-4 space-y-2">
              {policyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-black/70 transition-all duration-300 hover:translate-x-0.5 hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-black/70 transition-all duration-300 hover:translate-x-0.5 hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-black">Contact</h3>
            <ul className="mt-4 space-y-2 text-xs text-black/70">
              <li>
                <a
                  href="mailto:hello@elementium.co"
                  className="transition-colors duration-300 hover:text-black"
                >
                  hello@elementium.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+4402034567890"
                  className="transition-colors duration-300 hover:text-black"
                >
                  +44 020 3456 7890
                </a>
              </li>
              <li>Elementium Studio</li>
              <li>18 Finsbury Square</li>
              <li>London EC2A 1AH</li>
              <li>United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-4 text-center text-xs text-black/60">
          © {new Date().getFullYear()} Elementium. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
