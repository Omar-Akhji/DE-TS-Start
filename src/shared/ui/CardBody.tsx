import { getFirstLetter } from "../lib/utilities.ts";

interface CardBodyProperties {
  title: string;
  subtitle?: string | undefined;
  description?: string | undefined;
  category?: string | undefined;
  badge?: string | undefined;
  gradient: string;
  icon?: string | undefined;
  stats?: Array<{ label: string; value: string }> | undefined;
  variant?: "default" | "large" | undefined;
}

export const CardBody = ({
  title,
  subtitle,
  description,
  category,
  badge,
  gradient,
  icon,
  stats,
  variant = "default",
}: CardBodyProperties) => {
  const iconText = icon ?? getFirstLetter(title);

  return (
    <article className="h-full">
      <div
        className="group card-link relative z-1 flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl border-none bg-transparent p-4 text-left no-underline shadow-xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.25"
        aria-label={`${title} ${subtitle ?? ""}`}
      >
        <figure className="m-0 aspect-video w-full overflow-hidden rounded-2xl">
          <div
            className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-110"
            style={{ background: gradient }}
            aria-hidden="true"
          >
            <span
              className={`${
                variant === "large" ? "text-4xl tablet:text-6xl" : "text-3xl tablet:text-5xl"
              } font-bold text-white/40 drop-shadow-md drop-shadow-white/20 transition-transform duration-500 group-hover:scale-110`}
            >
              {iconText}
            </span>
          </div>
        </figure>
        <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
          {category || badge ?
            <div className="m-0 mbe-3 flex items-center gap-2 text-mist-500">
              {category ?
                <span className="rounded-full border border-yellow/30 bg-yellow/20 px-3 py-1 font-bold text-yellow">
                  {category}
                </span>
              : null}
              {badge ?
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-mist-500">
                  {badge}
                </span>
              : null}
              {subtitle ?
                <span className="font-medium">• {subtitle}</span>
              : null}
            </div>
          : null}

          <h3
            className={`m-0 mbe-2 ${
              variant === "large" ? "text-xl tablet:text-2xl" : "text-lg tablet:text-xl"
            } font-bold text-white transition-colors duration-300 text-shadow-sm group-hover:text-yellow`}
          >
            {title}
          </h3>
          {description ?
            <p className="m-0 mbe-4 text-xs leading-relaxed text-mist-500 tablet:text-sm">
              {description}
            </p>
          : null}

          {stats && stats.length > 0 ?
            <dl className="mbs-auto flex gap-8 border-bs border-(--glass-border) pbs-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col"
                >
                  <dd className="stat-value m-0 text-xl font-bold text-orange tablet:text-2xl">
                    {stat.value}
                  </dd>
                  <dt className="text-xs text-text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          : null}
        </div>
      </div>
    </article>
  );
};
