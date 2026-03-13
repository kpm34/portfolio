import { Skill, TargetRole, RoleMatchScore, SkillMatch } from './types';

export function calculateRoleMatch(
  role: TargetRole,
  userSkills: Skill[]
): RoleMatchScore {
  const skillMap = new Map(userSkills.map((s) => [s.id, s]));

  const matchedSkills: SkillMatch[] = [];
  const gapSkills: SkillMatch[] = [];
  const strongSkills: SkillMatch[] = [];

  let weightedScore = 0;
  let totalWeight = 0;

  for (const req of role.requirements) {
    const userSkill = skillMap.get(req.skillId);
    totalWeight += req.importance;

    const match: SkillMatch = {
      skillId: req.skillId,
      skillName: userSkill?.name ?? req.skillId.replace(/-/g, ' '),
      importance: req.importance,
      proficiency: userSkill?.proficiency ?? 0,
      isRequired: req.isRequired,
    };

    if (userSkill) {
      // User has this skill - score based on proficiency relative to importance
      const normalizedProficiency = userSkill.proficiency / 5; // 0-1
      weightedScore += normalizedProficiency * req.importance;
      matchedSkills.push(match);

      if (userSkill.proficiency >= 4) {
        strongSkills.push(match);
      }
    } else {
      // User lacks this skill entirely
      gapSkills.push(match);
    }
  }

  const overallScore = totalWeight > 0
    ? Math.round((weightedScore / totalWeight) * 100)
    : 0;

  return {
    roleId: role.id,
    roleTitle: role.title,
    overallScore,
    matchedSkills: matchedSkills.sort((a, b) => b.importance - a.importance),
    gapSkills: gapSkills.sort((a, b) => b.importance - a.importance),
    strongSkills: strongSkills.sort((a, b) => b.importance - a.importance),
  };
}

export function calculateAllRoleMatches(
  roles: TargetRole[],
  userSkills: Skill[]
): RoleMatchScore[] {
  return roles
    .map((role) => calculateRoleMatch(role, userSkills))
    .sort((a, b) => b.overallScore - a.overallScore);
}

/**
 * Prepare data for radar chart comparison.
 * Returns an array of objects with skill name, user proficiency (normalized 0-100),
 * and role importance (normalized 0-100).
 */
export function getRadarChartData(
  role: TargetRole,
  userSkills: Skill[]
): { skill: string; you: number; required: number }[] {
  const skillMap = new Map(userSkills.map((s) => [s.id, s]));

  return role.requirements.map((req) => {
    const userSkill = skillMap.get(req.skillId);
    return {
      skill: userSkill?.name ?? req.skillId.replace(/-/g, ' '),
      you: userSkill ? (userSkill.proficiency / 5) * 100 : 0,
      required: (req.importance / 10) * 100,
    };
  });
}
