import { Mail, Tag, User } from "lucide-react";

interface EmailVisualFrameProperties {
  type: "informal" | "formal";
  subject: string;
  recipient: string;
  sections: { label: string; text: string; description: string; color: string }[];
}

export function EmailVisualFrame({
  type,
  subject,
  recipient,
  sections,
}: EmailVisualFrameProperties) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl backdrop-blur-xl">
      {/* Browser/Email Header */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-500/50" />
          <div className="size-3 rounded-full bg-amber-500/50" />
          <div className="size-3 rounded-full bg-emerald-500/50" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-2 rounded-lg bg-black/20 px-4 py-1 text-xs text-zinc-400">
            <Mail size={12} />
            <span>Neues Dokument - {type === "informal" ? "Informell" : "Formell"}</span>
          </div>
        </div>
      </div>

      {/* Email Fields */}
      <div className="space-y-px border-b border-white/10 bg-white/2">
        <div className="flex items-center gap-3 px-6 py-3">
          <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">An:</span>
          <div className="flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-400">
            <User size={14} />
            {recipient}
          </div>
        </div>
        <div className="flex items-center gap-3 px-6 py-3">
          <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Betreff:
          </span>
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Tag
              size={14}
              className="text-zinc-400"
            />
            {subject}
          </div>
        </div>
      </div>

      {/* Email Content Area */}
      <div className="relative p-8 pt-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px] opacity-5" />

        <div className="relative space-y-6">
          {sections.map((section, sectionIndex) => (
            <div
              key={section.label}
              className="group relative"
            >
              {/* Annotation Label */}
              <div className="absolute top-0 -left-4 hidden -translate-x-full pr-4 opacity-0 transition-opacity group-hover:opacity-100 lg:block">
                <div
                  className={`rounded-lg border px-3 py-1.5 text-[10px] font-black tracking-widest uppercase shadow-lg backdrop-blur-md ${section.color}`}
                >
                  {section.label}
                </div>
              </div>

              {/* Text Block */}
              <div
                className={`relative rounded-xl border border-solid p-4 transition-all hover:bg-white/5 ${
                  section.color === "text-amber-400" ? "border-amber-400/30"
                  : section.color === "text-blue-400" ? "border-blue-400/30"
                  : section.color === "text-fuchsia-400" ? "border-fuchsia-400/30"
                  : section.color === "text-emerald-400" ? "border-emerald-400/30"
                  : section.color === "text-pink-400" ? "border-pink-400/30"
                  : "border-white/20"
                }`}
              >
                <div className="mb-1 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold tracking-[0.2em] uppercase ${section.color}`}
                  >
                    {sectionIndex + 1}. {section.label}
                  </span>
                  <span className="text-[10px] text-zinc-500 italic">{section.description}</span>
                </div>
                <p className="font-serif text-lg leading-relaxed text-zinc-200">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
