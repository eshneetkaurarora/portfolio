const WEAK_STARTERS = [
  "responsible for",
  "worked on",
  "worked with",
  "helped",
  "helped with",
  "assisted",
  "assisted with",
  "involved in",
  "tasked with",
  "handled",
  "was",
  "did",
  "duties included",
];

const FILLER_PHRASES = [
  "hard worker",
  "team player",
  "detail oriented",
  "detail-oriented",
  "results driven",
  "results-driven",
  "self starter",
  "self-starter",
  "go-getter",
  "think outside the box",
  "synergy",
  "fast learner",
  "people person",
];

const STRONG_VERBS = [
  "Led",
  "Built",
  "Designed",
  "Architected",
  "Launched",
  "Reduced",
  "Increased",
  "Improved",
  "Automated",
  "Owned",
  "Shipped",
  "Drove",
  "Scaled",
  "Optimized",
  "Mentored",
  "Negotiated",
  "Delivered",
];

export interface BulletIssue {
  type: "weak-starter" | "no-metric" | "passive-voice" | "filler-phrase" | "too-short" | "too-long";
  message: string;
}

export interface BulletFeedback {
  text: string;
  issues: BulletIssue[];
}

export interface ResumeReport {
  bullets: BulletFeedback[];
  score: number;
  summary: string;
  strongVerbSuggestions: string[];
}

function hasMetric(text: string): boolean {
  return /\d/.test(text);
}

function isPassive(text: string): boolean {
  return /\b(was|were|been|being|is|are)\b\s+\w+ed\b/i.test(text);
}

function startsWeak(text: string): string | null {
  const lower = text.toLowerCase().trim();
  return WEAK_STARTERS.find((w) => lower.startsWith(w)) ?? null;
}

function findFiller(text: string): string | null {
  const lower = text.toLowerCase();
  return FILLER_PHRASES.find((f) => lower.includes(f)) ?? null;
}

export function analyzeResume(raw: string): ResumeReport {
  const bullets = raw
    .split("\n")
    .map((line) => line.replace(/^[-•*•]\s*/, "").trim())
    .filter((line) => line.length > 0);

  let deductions = 0;
  const feedbackList: BulletFeedback[] = bullets.map((text) => {
    const issues: BulletIssue[] = [];
    const wordCount = text.split(/\s+/).length;

    const weakStart = startsWeak(text);
    if (weakStart) {
      issues.push({ type: "weak-starter", message: `Starts with a weak phrase ("${weakStart}"). Open with a strong action verb instead.` });
      deductions += 6;
    }

    if (!hasMetric(text)) {
      issues.push({ type: "no-metric", message: "No number here. How much, how many, how fast, or by what percent?" });
      deductions += 8;
    }

    if (isPassive(text)) {
      issues.push({ type: "passive-voice", message: "Reads as passive voice. Make yourself the subject of the sentence." });
      deductions += 5;
    }

    const filler = findFiller(text);
    if (filler) {
      issues.push({ type: "filler-phrase", message: `"${filler}" is a filler phrase. Replace it with evidence that shows it instead.` });
      deductions += 10;
    }

    if (wordCount < 5) {
      issues.push({ type: "too-short", message: "Pretty thin. Add enough context that a stranger understands the impact." });
      deductions += 4;
    } else if (wordCount > 32) {
      issues.push({ type: "too-long", message: "Long bullet. Consider splitting into two, or tightening it." });
      deductions += 3;
    }

    return { text, issues };
  });

  const score = bullets.length === 0 ? 0 : Math.max(0, 100 - Math.round(deductions / bullets.length));

  const summary =
    bullets.length === 0
      ? "Paste your resume bullets (one per line) to get feedback."
      : score >= 80
      ? "Strong draft, with only small polish left."
      : score >= 60
      ? "Good foundation, but a few bullets need real rework."
      : "Needs a solid pass. Focus on metrics and action verbs first.";

  const usedStrongVerb = new Set(
    bullets.map((b) => b.split(/\s+/)[0]).filter((w) => STRONG_VERBS.includes(w))
  );
  const strongVerbSuggestions = STRONG_VERBS.filter((v) => !usedStrongVerb.has(v)).slice(0, 8);

  return { bullets: feedbackList, score, summary, strongVerbSuggestions };
}
