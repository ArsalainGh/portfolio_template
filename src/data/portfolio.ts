/* ============================================================
   TRANSMISSION DATA — single source of truth for the portfolio.
   Replace every [PLACEHOLDER] in brackets with real content.
   Do not invent facts — leave the bracket if unknown.
   ============================================================ */

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "globe";
};

export type EducationEntry = {
  institution: string;
  degree: string;
  range: string;
  detail?: string;
};

export type CertificationEntry = {
  title: string;
  issuer: string;
  date: string;
  link: string; // verify link
};

export type Collaborator = {
  name: string;
  href: string; // GitHub profile URL
};

export type ProjectEntry = {
  name: string;
  desc: string;
  tech: string[];
  repo: string;
  image: string;
  collaborators?: Collaborator[];
};

export const identity = {
  fullName: "[FULL NAME]",
  title: "[PROFESSIONAL TITLE]",
  shortCode: "[FN]", // initials used in the HUD header
  tagline:
    "[TAGLINE] — replace with two or three sentences: who you are, what you build, and the questions that keep you up at night.",
  location: "[CITY, COUNTRY]",
  email: "[EMAIL_ADDRESS]",
  year: "[YEAR]",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "[GITHUB_URL]", icon: "github" },
  { label: "LinkedIn", href: "[LINKEDIN_URL]", icon: "linkedin" },
  { label: "Twitter / X", href: "[TWITTER_URL]", icon: "twitter" },
  { label: "Email", href: "mailto:[EMAIL_ADDRESS]", icon: "mail" },
];

export const navItems = [
  { index: "01", id: "education", label: "EDUCATION" },
  { index: "02", id: "certifications", label: "CERTS" },
  { index: "03", id: "projects", label: "PROJECTS" },
  { index: "04", id: "about", label: "ABOUT" },
];

export const education: EducationEntry[] = [
  {
    institution: "[INSTITUTION_1]",
    degree: "[DEGREE_1]",
    range: "[DATE_RANGE_1]",
    detail: "[FOCUS_AREA / HONORS — optional]",
  },
  {
    institution: "[INSTITUTION_2]",
    degree: "[DEGREE_2]",
    range: "[DATE_RANGE_2]",
    detail: "[FOCUS_AREA / HONORS — optional]",
  },
  {
    institution: "[INSTITUTION_3]",
    degree: "[DEGREE_3]",
    range: "[DATE_RANGE_3]",
    detail: "[FOCUS_AREA / HONORS — optional]",
  },
];

export const certifications: CertificationEntry[] = [
  {
    title: "[CERT_TITLE_1]",
    issuer: "[ISSUER_1]",
    date: "[DATE_1]",
    link: "[CERT_LINK_1]",
  },
  {
    title: "[CERT_TITLE_2]",
    issuer: "[ISSUER_2]",
    date: "[DATE_2]",
    link: "[CERT_LINK_2]",
  },
  {
    title: "[CERT_TITLE_3]",
    issuer: "[ISSUER_3]",
    date: "[DATE_3]",
    link: "[CERT_LINK_3]",
  },
];

export const projects: ProjectEntry[] = [
  {
    name: "[PROJECT_NAME_1]",
    desc: "[PROJECT_DESC_1] — one or two sentences on what it does and what it taught you.",
    tech: ["[TECH_1]", "[TECH_2]", "[TECH_3]"],
    repo: "[REPO_LINK_1]",
    image: "/images/project-1.jpg",
    collaborators: [
      { name: "[COLLAB_1]", href: "[COLLAB_GH_URL_1]" },
      { name: "[COLLAB_2]", href: "[COLLAB_GH_URL_2]" },
    ],
  },
  {
    name: "[PROJECT_NAME_2]",
    desc: "[PROJECT_DESC_2] — one or two sentences on what it does and what it taught you.",
    tech: ["[TECH_1]", "[TECH_2]", "[TECH_3]"],
    repo: "[REPO_LINK_2]",
    image: "/images/project-2.jpg",
  },
  {
    name: "[PROJECT_NAME_3]",
    desc: "[PROJECT_DESC_3] — one or two sentences on what it does and what it taught you.",
    tech: ["[TECH_1]", "[TECH_2]", "[TECH_3]"],
    repo: "[REPO_LINK_3]",
    image: "/images/project-3.jpg",
    collaborators: [{ name: "[COLLAB_1]", href: "[COLLAB_GH_URL_1]" }],
  },
  {
    name: "[PROJECT_NAME_4]",
    desc: "[PROJECT_DESC_4] — one or two sentences on what it does and what it taught you.",
    tech: ["[TECH_1]", "[TECH_2]", "[TECH_3]"],
    repo: "[REPO_LINK_4]",
    image: "/images/project-4.jpg",
  },
];

export const about = {
  photo: "/images/portrait.jpg", // [PHOTO] — swap with your own image in /public/images
  photoAlt: "[PHOTO]",
  paragraphs: [
    "[ABOUT_TEXT] — paragraph one: who you are, what you study or build, the moment the machine first made sense to you.",
    "[ABOUT_TEXT] — paragraph two: how you work — systems, questions, obsessions. What you chase when nobody is watching.",
    "[ABOUT_TEXT] — paragraph three: where you are headed. The kind of problems you want to spend your life inside of.",
  ],
  spec: [
    { key: "DESIGNATION", value: "[PROFESSIONAL TITLE]" },
    { key: "BASE", value: "[CITY, COUNTRY]" },
    { key: "CONTACT", value: "[EMAIL_ADDRESS]" },
    { key: "STATUS", value: "[STATUS // e.g. OPEN TO WORK]" },
  ],
};

/* Flavor lines for the Magi terminal in the hero. */
export const terminalLines = [
  "MAGI SYNC ......... 99.4% [OK]",
  "A.T. FIELD ........ DEPLOYED",
  "PILOT ............. [FULL NAME]",
  "DESIGNATION ....... [PROFESSIONAL TITLE]",
  "VOTE: MELCHIOR / BALTHASAR / CASPAR — UNANIMOUS",
];
