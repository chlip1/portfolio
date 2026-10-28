const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="font-display text-2xl leading-none">
          Ł<span className="italic text-accent">.</span>C
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Łukasz_Chlipała_CV.pdf"
          download
          className="rounded-full border border-ink px-4 py-1.5 text-sm transition-colors hover:bg-ink hover:text-paper"
        >
          Download CV ↓
        </a>
      </nav>
    </header>
  );
}
