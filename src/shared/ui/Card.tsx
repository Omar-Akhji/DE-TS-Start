import { Link } from "@tanstack/react-router";
import { CardBody } from "./CardBody.tsx";

interface CardProperties {
  href: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  badge?: string;
  gradient: string;
  icon?: string;
  stats?: Array<{ label: string; value: string }>;
  variant?: "default" | "large";
}

export const Card = ({ href, ...bodyProperties }: CardProperties) => {
  const isExternal = href.startsWith("http") || href === "#";

  if (isExternal) {
    return (
      <a
        href={href}
        className="block h-full no-underline"
      >
        <CardBody {...bodyProperties} />
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="block h-full no-underline"
    >
      <CardBody {...bodyProperties} />
    </Link>
  );
};
