export default function PageSection({ id, className = "", children }) {
  return (
    <section id={id} className={`section-block relative px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </section>
  );
}
