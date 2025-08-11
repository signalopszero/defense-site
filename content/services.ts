export type Service = {
  /** Unique identifier for the service */
  id: string
  /** Human‑readable name */
  name: string
  /** Slug used in the URL */
  slug: string
  /** Short introduction paragraph */
  intro: string
  /** Bullet list: what we do */
  what: string[]
  /** Bullet list: how we work */
  how: string[]
  /** Bullet list: outcomes */
  outcomes: string[]
  /** Relative path to illustrative image in public/assets */
  image: string
}

export const services: Service[] = [
  {
    id: 'radar',
    name: 'Radar Systems',
    slug: 'radar',
    intro:
      'From concept to field‑ready hardware, we provide end‑to‑end radar engineering services for defence and aerospace clients.',
    what: [
      'Waveform design and simulation for surveillance, imaging and tracking.',
      'RF hardware prototyping and antenna design.',
      'Sensor fusion combining radar with EO/IR, LiDAR and GNSS.',
    ],
    how: [
      'Requirements capture and system modelling.',
      'Rapid prototyping with iterative testing.',
      'Laboratory and field validation with documented protocols.',
    ],
    outcomes: [
      'Enhanced detection range and resolution.',
      'Reduced latency and improved robustness in contested environments.',
      'Integration with existing platforms and control systems.',
    ],
    image: '/assets/thumb-2.jpg',
  },
  {
    id: 'ai',
    name: 'AI Integration',
    slug: 'ai',
    intro:
      'We integrate machine learning and autonomy into mission systems to improve situational awareness and decision‑making.',
    what: [
      'Data ingestion, labelling and curation for radar and multimodal sensors.',
      'Development of classification, detection, tracking and sensor‑fusion models.',
      'Uncertainty quantification and adversarial robustness techniques.',
    ],
    how: [
      'Evaluate mission objectives and data availability.',
      'Train and validate models using rigorous cross‑validation and stress testing.',
      'Deploy models on embedded hardware with performance optimisation.',
    ],
    outcomes: [
      'Increased situational awareness and reduced operator workload.',
      'Faster and more confident decision‑making.',
      'Adaptable architectures that evolve with new data.',
    ],
    image: '/assets/thumb-3.jpg',
  },
  {
    id: 'aerospace',
    name: 'Aerospace/Space',
    slug: 'aerospace',
    intro:
      'Our aerospace and space engineering services support missions from launch through orbit with specialised design and analysis.',
    what: [
      'System and subsystem design for spacecraft, satellites and payloads.',
      'Structural analysis, thermal modelling and vibration testing.',
      'Guidance, navigation and control (GNC) algorithms and software.',
    ],
    how: [
      'Collaborate with clients to define requirements and mission constraints.',
      'Use high‑fidelity simulation tools (CFD, FEA) to iterate designs.',
      'Prototype, test and refine hardware and software for qualification.',
    ],
    outcomes: [
      'Reliable, lightweight structures meeting mission budgets.',
      'Improved mission longevity and performance.',
      'Seamless integration with launch and ground systems.',
    ],
    image: '/assets/thumb-1.jpg',
  },
]