export default function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  crumbs?: string;
}) {
  return (
    <section className="page-hero">
      <svg className="page-hero-sketch" width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="#fff" strokeWidth="1" aria-hidden="true"><path d="M60 2L40 45l12-3-20 46M40 45l22-30" /></svg>
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {crumbs && <div className="crumbs">{crumbs}</div>}
      </div>
    </section>
  );
}
