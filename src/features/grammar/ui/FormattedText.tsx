/** Parses inline markdown: **bold** and *highlight* */
const FormattedText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <span>
      {parts.map((part) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong
              key={part}
              className="font-bold text-yellow"
            >
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <span
              key={part}
              className="font-medium text-yellow"
            >
              {part.slice(1, -1)}
            </span>
          );
        }

        return part;
      })}
    </span>
  );
};

/** Renders a content item (string or highlighted object) with inline markdown formatting. */
export const ContentItem = ({
  content,
}: {
  content: string | { text: string; highlight?: boolean };
}) => {
  const text = typeof content === "string" ? content : content.text;
  const isHighlighted = typeof content !== "string" && content.highlight;

  return (
    <span className={isHighlighted ? "font-medium text-yellow" : ""}>
      <FormattedText text={text} />
    </span>
  );
};
