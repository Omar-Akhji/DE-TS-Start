import { Heart } from "lucide-react";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import type { FamilyMember } from "../model/types.ts";

interface FamilyTreeProperties {
  members: FamilyMember[];
}

const levelLabels = new Map<number, string>([
  [1, "Die Großeltern"],
  [2, "Die Eltern"],
  [3, "Die Kinder"],
  [4, "Die Enkel"],
]);

// Group members into couples (by partnerId) and singles within a level
const groupIntoCouples = (levelMembers: FamilyMember[]) => {
  const visited = new Set<string>();
  const groups: (FamilyMember | [FamilyMember, FamilyMember])[] = [];
  const membersMap = new Map(levelMembers.map((m) => [m.id, m]));

  for (const member of levelMembers) {
    if (visited.has(member.id)) continue;
    visited.add(member.id);

    if (member.partnerId) {
      const partner = membersMap.get(member.partnerId);
      if (partner && !visited.has(partner.id)) {
        visited.add(partner.id);
        // female first for visual consistency
        groups.push(member.gender === "female" ? [member, partner] : [partner, member]);
        continue;
      }
    }
    groups.push(member);
  }
  return groups;
};

export const FamilyTree = ({ members }: FamilyTreeProperties) => {
  // Group members by level
  const levels = [1, 2, 3, 4].flatMap((lvl) => {
    const group = members.filter((m) => m.level === lvl);
    return group.length > 0 ? [group] : [];
  });

  return (
    <div className="@container flex flex-col items-center gap-2 p-2 @md:p-4">
      {levels.map((levelMembers, levelIndex) => {
        const level = levelMembers[0]?.level ?? levelIndex + 1;
        const groups = groupIntoCouples(levelMembers);

        return (
          <AnimateOnScroll
            key={level}
            animation="fade-up"
            delay={levelIndex * 150}
            className="flex w-full flex-col items-center"
          >
            {/* Level label */}
            <div className="mb-3 text-xs font-semibold tracking-widest text-mist-500 uppercase">
              {levelLabels.get(level) ?? `Generation ${level}`}
            </div>

            {/* Members row */}
            <div className="flex flex-wrap items-end justify-center gap-4 @md:gap-6">
              {groups.map((group) => {
                if (Array.isArray(group)) {
                  // Couple pair
                  const [a, b] = group;
                  return (
                    <div
                      key={`${a.id}-${b.id}`}
                      className="flex items-center gap-1 @md:gap-2"
                    >
                      <MemberCard member={a} />
                      {/* Heart connector */}
                      <Heart
                        className="fill-pink-400/30 text-pink-400/70"
                        size={16}
                      />
                      <MemberCard member={b} />
                    </div>
                  );
                }
                return (
                  <MemberCard
                    key={group.id}
                    member={group}
                  />
                );
              })}
            </div>

            {/* Connector line to next level */}
            {levelIndex < levels.length - 1 ?
              <div className="flex h-10 w-full items-center justify-center @md:h-14">
                <div className="h-full w-px bg-linear-to-b from-white/20 to-white/5" />
              </div>
            : null}
          </AnimateOnScroll>
        );
      })}
    </div>
  );
};

/* ─── Member Card — Uniform Shape & Size ─── */

const MemberCard = ({ member }: { member: FamilyMember }) => {
  const isMale = member.gender === "male";
  const isSelf = member.relation === "self";

  const colorClasses =
    isSelf ? "border-amber-400 bg-amber-500/10 shadow-xl shadow-amber-400/25"
    : isMale ? "border-sky-400/40 bg-sky-500/5 hover:border-sky-400/70"
    : "border-pink-400/40 bg-pink-500/5 hover:border-pink-400/70";

  return (
    <div
      className={`flex h-24 w-28 flex-col items-center justify-center rounded-xl border-2 text-center transition-all duration-300 hover:scale-105 @md:h-28 @md:w-36 ${colorClasses}`}
    >
      {isSelf ?
        <span className="mb-0.5 text-[0.6rem] font-bold tracking-wider text-amber-400 uppercase @md:text-xs">
          ICH
        </span>
      : null}
      <div className="text-sm font-bold text-text @md:text-base">{member.german}</div>
      <div
        className="font-arabic text-sm font-medium text-white/80 @md:text-base"
        dir="rtl"
      >
        {member.arabic}
      </div>
    </div>
  );
};
