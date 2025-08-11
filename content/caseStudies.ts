export type CaseStudy = {
  /** Unique identifier */
  id: string
  /** Short descriptive title */
  title: string
  /** Problem statement */
  problem: string
  /** Approach taken */
  approach: string
  /** Impact/outcome */
  impact: string
  /** Optional link to media resource */
  mediaUrl?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'compact-radar-uas',
    title: 'Compact radar for unmanned aerial systems',
    problem:
      'A defence agency needed a compact radar system for unmanned aerial vehicles operating in congested spectra.',
    approach:
      'Our engineers designed a customised waveform, built a prototype with COTS hardware, and implemented sensor‑fusion algorithms to improve clutter suppression.',
    impact:
      'Achieved a 2× increase in detection range and 40% reduction in false alarms during field tests.',
  },
  {
    id: 'ai-anomaly-detection',
    title: 'AI‑based anomaly detection for satellite ground systems',
    problem:
      'An aerospace prime sought to integrate AI‑based anomaly detection into an existing satellite ground segment.',
    approach:
      'We developed and trained deep learning models on historical telemetry data, validated them against simulated anomalies, and deployed the solution on the customer’s hardware.',
    impact:
      'Reduced anomaly detection time from hours to minutes, enabling proactive maintenance and increasing system availability.',
  },
  {
    id: 'lunar-lander-gnc',
    title: 'Precision GNC for a lunar lander',
    problem:
      'A NASA mission required high‑precision guidance, navigation and control algorithms for a lunar lander with tight mass and power budgets.',
    approach:
      'Our team combined advanced navigation filters with sensor fusion and optimised the software for on‑board hardware.',
    impact:
      'Improved landing accuracy by 30% and met all timing and resource constraints.',
  },
]