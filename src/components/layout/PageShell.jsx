export default function PageShell({ children }) {
  return (
    <main className="portfolio-shell relative min-h-screen overflow-hidden text-white">
      <div className="relative isolate">{children}</div>
    </main>
  );
}
