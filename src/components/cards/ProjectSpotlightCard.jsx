export default function ProjectSpotlightCard({ project }) {
  const accent = project.previewAccent ?? "#ffffff";
  const accentAlt = project.previewAccentAlt ?? accent;
  const description = project.summary ?? project.description ?? project.tagline ?? "";
  const projectLinks = [
    ...project.repositories.map((link) =>
      resolveProjectLink(link, "github", accent)
    ),
    ...project.previews.map((link) =>
      resolveProjectLink(link, "external", accent)
    ),
  ];
  const statusMeta = getStatusMeta(project.status, project.statusType, accent);

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

            <StatusBadge label={project.status} meta={statusMeta} />
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
                <ProjectActionLink key={link.url} href={link.url} link={link} />
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
        <CalendarIcon className="h-4 w-4 fill-none stroke-current text-white" />
      </span>
      <span>Creado en {createdAt}</span>
    </div>
  );
}

function StatusBadge({ label, meta }) {
  const Icon = meta.Icon;

  return (
    <span
      className="inline-flex max-w-full items-center gap-2 rounded-[1rem] px-2.5 py-2 text-[11px] font-semibold text-white md:text-xs"
      style={{
        background: `linear-gradient(135deg, ${toAlpha(meta.color, 0.24)}, ${toAlpha(
          meta.colorAlt,
          0.12
        )})`,
        boxShadow: `inset 0 0 0 1px ${toAlpha(meta.color, 0.36)}`,
      }}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.85rem]"
        style={{
          backgroundColor: toAlpha(meta.color, 0.18),
          boxShadow: `inset 0 0 0 1px ${toAlpha(meta.color, 0.28)}`,
        }}
      >
        <Icon className="h-4 w-4 fill-none stroke-current text-white" />
      </span>
      <span className="leading-relaxed text-white/95">{label}</span>
    </span>
  );
}

function ProjectActionLink({ href, link }) {
  const Icon = link.Icon;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-w-[175px] max-w-full items-center gap-3 rounded-[1.15rem] px-3.5 py-3 text-left text-white transition duration-300 hover:-translate-y-1"
      style={{
        background: `linear-gradient(135deg, ${toAlpha(link.color, 0.22)}, ${toAlpha(
          link.colorAlt,
          0.08
        )} 58%, rgba(7,10,16,0.42))`,
        boxShadow: `inset 0 0 0 1px ${toAlpha(link.color, 0.28)}`,
      }}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem]"
        style={{
          backgroundColor: toAlpha(link.color, 0.2),
          boxShadow: `inset 0 0 0 1px ${toAlpha(link.color, 0.34)}`,
        }}
      >
        <Icon className="h-5 w-5 fill-none stroke-current text-white" />
      </span>

      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/58">
          {link.typeLabel}
        </span>
        <span className="mt-1 block truncate text-sm font-semibold text-white/95">
          {link.label}
        </span>
      </span>
    </a>
  );
}

function resolveProjectLink(link, variant, accent) {
  const type = normalizeLinkType(link.type ?? inferLinkType(link, variant));
  const meta = getLinkTypeMeta(type, accent);

  return {
    ...link,
    ...meta,
    type,
  };
}

function inferLinkType(link, variant) {
  const value = `${link.label ?? ""} ${link.url ?? ""}`.toLowerCase();

  if (variant === "github" || value.includes("github")) {
    return "repo";
  }

  if (value.includes("doc")) {
    return "docs";
  }

  if (
    value.includes("jugar") ||
    value.includes("roblox.com") ||
    value.includes("/games/")
  ) {
    return "game";
  }

  if (
    value.includes("website") ||
    value.includes("sitio") ||
    value.includes("vercel.app") ||
    value.includes("github.io") ||
    value.includes("app")
  ) {
    return "site";
  }

  return variant === "external" ? "site" : "repo";
}

function normalizeLinkType(type) {
  const value = `${type ?? ""}`.trim().toLowerCase();

  if (value === "github") {
    return "repo";
  }

  if (value === "website" || value === "web" || value === "external") {
    return "site";
  }

  if (value === "documentation") {
    return "docs";
  }

  return value;
}

function getLinkTypeMeta(type, accent) {
  switch (type) {
    case "repo":
      return {
        typeLabel: "Repositorio",
        color: "#a78bfa",
        colorAlt: "#7c3aed",
        Icon: GitHubIcon,
      };
    case "docs":
      return {
        typeLabel: "Documentacion",
        color: "#38bdf8",
        colorAlt: "#0ea5e9",
        Icon: DocumentIcon,
      };
    case "game":
      return {
        typeLabel: "Juego",
        color: "#f59e0b",
        colorAlt: "#fb7185",
        Icon: GamepadIcon,
      };
    case "site":
      return {
        typeLabel: "Sitio web",
        color: "#34d399",
        colorAlt: "#22c55e",
        Icon: GlobeIcon,
      };
    default:
      return {
        typeLabel: "Enlace",
        color: accent ?? "#ffffff",
        colorAlt: accent ?? "#ffffff",
        Icon: ExternalLinkIcon,
      };
  }
}

function getStatusMeta(status, explicitType, accent) {
  const type = normalizeStatusType(explicitType ?? inferStatusType(status));

  switch (type) {
    case "live":
      return {
        color: "#34d399",
        colorAlt: "#22c55e",
        Icon: RocketIcon,
      };
    case "open-source":
      return {
        color: "#22d3ee",
        colorAlt: "#38bdf8",
        Icon: SparklesIcon,
      };
    case "prototype":
      return {
        color: "#f59e0b",
        colorAlt: "#f97316",
        Icon: FlaskIcon,
      };
    case "award":
      return {
        color: "#f472b6",
        colorAlt: "#c084fc",
        Icon: TrophyIcon,
      };
    case "completed":
      return {
        color: "#60a5fa",
        colorAlt: "#38bdf8",
        Icon: CheckCircleIcon,
      };
    default:
      return {
        color: accent ?? "#ffffff",
        colorAlt: accent ?? "#ffffff",
        Icon: SparklesIcon,
      };
  }
}

function inferStatusType(status) {
  const value = `${status ?? ""}`.toLowerCase();

  if (value.includes("open source")) {
    return "open-source";
  }

  if (value.includes("prototipo")) {
    return "prototype";
  }

  if (
    value.includes("hackathon") ||
    value.includes("top") ||
    value.includes("campeon") ||
    value.includes("champion") ||
    value.includes("gamejam")
  ) {
    return "award";
  }

  if (value.includes("terminado")) {
    return "completed";
  }

  if (
    value.includes("desplegado") ||
    value.includes("publicado") ||
    value.includes("en vivo")
  ) {
    return "live";
  }

  return "custom";
}

function normalizeStatusType(type) {
  const value = `${type ?? ""}`.trim().toLowerCase();

  if (value === "opensource") {
    return "open-source";
  }

  if (value === "published") {
    return "live";
  }

  return value;
}

function CalendarIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
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

function GitHubIcon({ className }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path
        className="fill-current"
        d="M12 2C6.477 2 2 6.589 2 12.25c0 4.528 2.865 8.37 6.839 9.724.5.096.682-.223.682-.495 0-.244-.009-.889-.014-1.744-2.782.622-3.369-1.387-3.369-1.387-.455-1.187-1.111-1.503-1.111-1.503-.909-.636.069-.623.069-.623 1.005.073 1.534 1.06 1.534 1.06.893 1.571 2.341 1.117 2.91.854.091-.664.35-1.117.636-1.374-2.221-.261-4.556-1.141-4.556-5.08 0-1.123.39-2.041 1.03-2.76-.104-.261-.447-1.313.097-2.739 0 0 .84-.276 2.75 1.054A9.35 9.35 0 0 1 12 6.92a9.33 9.33 0 0 1 2.504.35c1.909-1.33 2.748-1.054 2.748-1.054.546 1.426.203 2.478.1 2.74.64.718 1.028 1.636 1.028 2.759 0 3.949-2.339 4.816-4.568 5.072.359.319.679.948.679 1.911 0 1.38-.012 2.493-.012 2.833 0 .275.18.596.688.494A10.258 10.258 0 0 0 22 12.25C22 6.589 17.523 2 12 2Z"
      />
    </svg>
  );
}

function DocumentIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9Z" />
      <path d="M14 3v6h6" />
      <path d="M10 13h4" />
      <path d="M10 17h4" />
    </svg>
  );
}

function GamepadIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 10h12a4 4 0 0 1 3.8 5.25l-1 3A3 3 0 0 1 17.94 20H16a2 2 0 0 1-1.6-.8l-1.1-1.47a1.62 1.62 0 0 0-2.6 0L9.6 19.2A2 2 0 0 1 8 20H6.06a3 3 0 0 1-2.86-1.75l-1-3A4 4 0 0 1 6 10Z" />
      <path d="M8 13v4" />
      <path d="M6 15h4" />
      <path d="M16 14h.01" />
      <path d="M18 16h.01" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function ExternalLinkIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
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

function RocketIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 19.5c1.5-3 4.5-4.5 7.5-4.5" />
      <path d="M14 10 9 15" />
      <path d="M9 15H4v-5l8-8a4.243 4.243 0 0 1 6 6l-8 8Z" />
      <path d="M15 4h.01" />
    </svg>
  );
}

function SparklesIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" />
      <path d="M5 14l.6 1.4L7 16l-1.4.6L5 18l-.6-1.4L3 16l1.4-.6Z" />
    </svg>
  );
}

function FlaskIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v6l-5.5 9.5A2 2 0 0 0 6.23 21h11.54a2 2 0 0 0 1.73-3L14 8V2" />
      <path d="M8.5 13h7" />
    </svg>
  );
}

function TrophyIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v4a5 5 0 0 1-10 0Z" />
      <path d="M17 5h3v2a4 4 0 0 1-4 4" />
      <path d="M7 5H4v2a4 4 0 0 0 4 4" />
    </svg>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 5-5" />
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
