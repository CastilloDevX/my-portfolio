export default function ProjectSpotlightCard({ project }) {
  const accent = project.previewAccent ?? "#ffffff";
  const accentAlt = project.previewAccentAlt ?? accent;
  const description = project.summary ?? project.description ?? project.tagline ?? "";
  const projectLinks = [
    ...project.repositories.map((link) => ({ ...link, variant: "github" })),
    ...project.previews.map((link) => ({ ...link, variant: "external" })),
  ];

  return (
    <article className="relative flex min-h-0 flex-col overflow-hidden rounded-[1.7rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_22%),rgba(4,6,12,0.2)] p-4 backdrop-blur-sm md:p-5">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 14% 18%, ${toAlpha(accent, 0.18)}, transparent 26%), radial-gradient(circle at 84% 20%, ${toAlpha(
            accentAlt,
            0.12
          )}, transparent 24%)`,
        }}
      />

      <div className="relative flex min-h-0 flex-1 flex-col">
        <ProjectPreview project={project} />

        <div className="project-panel-scroll mt-4 min-h-0 max-h-[500px] overflow-y-auto pr-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-black leading-none md:text-[2.6rem]">
                {project.title}
              </h3>
              <CreationMeta accent={accent} createdAt={project.createdAt} />
            </div>

            <span
              className="rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
              style={{
                borderColor: toAlpha(accent, 0.42),
                backgroundColor: toAlpha(accent, 0.14),
              }}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/72 md:text-base">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border px-2.5 py-1 text-xs font-medium text-white"
                style={{
                  borderColor: toAlpha(accent, 0.38),
                  backgroundColor: toAlpha(accent, 0.12),
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {projectLinks.length ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {projectLinks.map((link) => (
                <ProjectActionLink
                  key={link.url}
                  href={link.url}
                  label={link.label}
                  accent={accent}
                  variant={link.variant}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className="relative h-[240px] flex-none overflow-hidden rounded-[1.5rem] bg-transparent md:h-[320px] xl:h-[380px]">
      {project.previewImage ? (
        <img
          src={project.previewImage}
          alt={`${project.title} preview`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_60%,rgba(255,255,255,0.04)_100%)]" />

      <div className="absolute inset-4 rounded-[1.25rem] bg-transparent md:inset-5" />
    </div>
  );
}

function CreationMeta({ accent, createdAt }) {
  return (
    <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/70">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full border"
        style={{
          borderColor: toAlpha(accent, 0.34),
          backgroundColor: toAlpha(accent, 0.12),
        }}
      >
        <CalendarIcon />
      </span>
      <span>Creado en {createdAt}</span>
    </div>
  );
}

function ProjectActionLink({ href, label, accent, variant }) {
  const isGithub = variant === "github";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2.5 rounded-[1rem] border px-3 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: toAlpha(accent, 0.3),
        backgroundColor: toAlpha(accent, 0.12),
      }}
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full border bg-black/15"
        style={{ borderColor: toAlpha(accent, 0.26) }}
      >
        {isGithub ? <GitHubIcon /> : <ExternalLinkIcon />}
      </span>
      <span>{label}</span>
    </a>
  );
}

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current text-white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current text-white"
    >
      <path d="M12 2C6.477 2 2 6.589 2 12.25c0 4.528 2.865 8.37 6.839 9.724.5.096.682-.223.682-.495 0-.244-.009-.889-.014-1.744-2.782.622-3.369-1.387-3.369-1.387-.455-1.187-1.111-1.503-1.111-1.503-.909-.636.069-.623.069-.623 1.005.073 1.534 1.06 1.534 1.06.893 1.571 2.341 1.117 2.91.854.091-.664.35-1.117.636-1.374-2.221-.261-4.556-1.141-4.556-5.08 0-1.123.39-2.041 1.03-2.76-.104-.261-.447-1.313.097-2.739 0 0 .84-.276 2.75 1.054A9.35 9.35 0 0 1 12 6.92a9.33 9.33 0 0 1 2.504.35c1.909-1.33 2.748-1.054 2.748-1.054.546 1.426.203 2.478.1 2.74.64.718 1.028 1.636 1.028 2.759 0 3.949-2.339 4.816-4.568 5.072.359.319.679.948.679 1.911 0 1.38-.012 2.493-.012 2.833 0 .275.18.596.688.494A10.258 10.258 0 0 0 22 12.25C22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current text-white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

function toAlpha(hex, alpha) {
  if (!hex?.startsWith("#")) {
    return `rgba(255, 255, 255, ${alpha})`;
  }

  const value = hex.slice(1);
  const normalized =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;

  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
