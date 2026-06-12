/** Category → color mapping. Single source of truth for themen styling. */
export const THEMEN_CATEGORY_COLORS: Record<string, string> = {
  essen: "orange-500",
  tech: "blue-500",
  gesellschaft: "purple-500",
  bildung: "emerald-500",
  gesundheit: "red-500",
  freizeit: "pink-500",
  umwelt: "green-500",
  arbeit: "cyan-500",
};

/**
 * Returns full tailwind classes for a category.
 * Static strings here ensure Tailwind v4 scanner picks them up.
 */
export function getCategoryClasses(cat: string): string {
  switch (cat) {
    case "essen": {
      return "text-orange-500 bg-orange-500/10 border-orange-500";
    }
    case "tech": {
      return "text-blue-500 bg-blue-500/10 border-blue-500";
    }
    case "gesellschaft": {
      return "text-purple-500 bg-purple-500/10 border-purple-500";
    }
    case "bildung": {
      return "text-emerald-500 bg-emerald-500/10 border-emerald-500";
    }
    case "gesundheit": {
      return "text-red-500 bg-red-500/10 border-red-500";
    }
    case "freizeit": {
      return "text-pink-500 bg-pink-500/10 border-pink-500";
    }
    case "umwelt": {
      return "text-green-500 bg-green-500/10 border-green-500";
    }
    case "arbeit": {
      return "text-cyan-500 bg-cyan-500/10 border-cyan-500";
    }
    default: {
      return "text-slate-500 bg-slate-500/10 border-slate-500";
    }
  }
}
