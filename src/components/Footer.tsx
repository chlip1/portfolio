export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Łukasz Chlipała</p>
        <ul className="flex gap-5">
          <li><a href="https://github.com/chlip1" target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/lchlipala" target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a></li>
          <li><a href="mailto:lukasz@chlipala.dev" className="hover:text-ink">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
