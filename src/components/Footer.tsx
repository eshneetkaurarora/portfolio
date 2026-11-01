export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center">
      <p className="font-mono text-xs text-muted">
        &copy; {new Date().getFullYear()} Eshneet Kaur Arora. Built with React, Tailwind &amp; Framer Motion.
      </p>
    </footer>
  );
}
