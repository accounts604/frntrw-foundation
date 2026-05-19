export type Story = {
  slug: string
  status: 'sample' | 'live'
  pillar: string
  programme: string
  title: string
  posterTitle: string // multiline for tile overlay
  dek: string
  date: string
  location: string
  heroImage: string
  outcomes: { label: string; value: string }[]
  body: { kind: 'p' | 'h3' | 'quote' | 'image'; text?: string; src?: string; alt?: string; cite?: string }[]
}

export const STORIES: Story[] = [
  {
    slug: 'holiday-camp-2025',
    status: 'sample',
    pillar: 'Grassroots to High Performance',
    programme: 'Holiday Camp',
    title: 'Three days. One field. A generation of access.',
    posterTitle: 'Three days.\nOne field.\nA generation of access.',
    dek: 'A South Auckland holiday camp that proved what equitable access to elite coaching looks like — and why every athlete in the room deserved to be there.',
    date: 'October 2025',
    location: 'South Auckland',
    heroImage: '/images/outdoor.jpg',
    outcomes: [
      { label: 'Young people on field', value: '64' },
      { label: 'Coaching hours delivered', value: '72' },
      { label: 'Whānau attending closing day', value: '180+' },
      { label: 'Cost to families', value: '$0' },
    ],
    body: [
      { kind: 'p', text: 'For three days in the spring holidays of 2025, sixty-four young Pasifika and Māori athletes from South and West Auckland stepped onto a dome field that — without Frntrw Foundation — most would never have crossed.' },
      { kind: 'p', text: 'They came from families where structured youth sport costs between $24 and $50 a week. They came from postcodes that consistently rank in Aotearoa’s highest deprivation deciles. And they came because, for the first time, the access was free — but the standard was not lowered to make it so.' },
      { kind: 'h3', text: 'Why this camp existed' },
      { kind: 'p', text: 'The market does not fund programmes for young people whose whānau cannot pay. The participation gap that opens up in early adolescence — when paid academies start filtering for those who can afford the fees — closes in this community by age fifteen. Most never come back.' },
      { kind: 'p', text: 'Census Johnston founded Frntrw Foundation in 2023 to interrupt that pattern. The holiday camp model is the most concentrated form of that intervention: three days of structured physical activity, pastoral mentorship, and cultural identity work — delivered to the cohort the market overlooks, at the standard the market reserves for those who pay.' },
      { kind: 'image', src: '/images/group-photo.jpg', alt: 'Athletes and coaches at the closing day' },
      { kind: 'h3', text: 'What the athletes did' },
      { kind: 'p', text: 'Each morning opened with a karakia and a cultural reflection led by one of the ten volunteer coaches — every one a current or recent professional player. Skills blocks ran in cross-discipline groupings: ball-handling, conditioning, decision-making under pressure, body management.' },
      { kind: 'p', text: 'Afternoons turned to whānau-style sessions: mentorship one-on-ones, performance reviews, and conversations about pathway — what next year looks like for an athlete who decides to keep showing up.' },
      { kind: 'quote', text: 'My boy came home different on day two. He told me a coach pulled him aside and said, you belong here. That is the bit you can’t buy.', cite: 'Camp parent · South Auckland' },
      { kind: 'h3', text: 'What it produced' },
      { kind: 'p', text: 'Sixty-four young people had access to seventy-two hours of professional-standard coaching at zero household cost. One hundred and eighty whānau attended the closing day. Coaches and parents identified a pipeline of athletes ready for the regular three-term programme that runs from February.' },
      { kind: 'p', text: 'For Frntrw, every camp is evidence — for funders, for sponsors, for the policy conversation about youth-sport equity in Aotearoa. The model works. The cohort shows up. The outcomes are real.' },
      { kind: 'h3', text: 'Where this leads' },
      { kind: 'p', text: 'The young people from this camp now have a pathway into Frntrw’s ongoing programme. Their stories — captured with whānau consent through the foundation’s impact-capture pipeline — become the reporting layer that backs every funding conversation.' },
      { kind: 'p', text: 'For a Pasifika and Māori cohort historically priced out of structured youth sport, that pathway is the difference between a one-time experience and a sustained intervention. Frntrw exists to make sure it is the second.' },
    ],
  },
  {
    slug: 'nth-harbour-pasifika-hauora-partnership',
    status: 'sample',
    pillar: 'Community Focused',
    programme: 'Partnership Event',
    title: 'Standing with Nth Harbour Pasifika Hauora.',
    posterTitle: 'Standing with\nNth Harbour Pasifika\nHauora.',
    dek: 'How a community partnership unlocks the cultural infrastructure that paid programmes can’t replicate.',
    date: 'Sample story · 2026',
    location: 'North Shore, Auckland',
    heroImage: '/images/group-photo.jpg',
    outcomes: [
      { label: 'Cohort reached', value: 'Sample' },
      { label: 'Cultural framework', value: 'Pasifika-led' },
      { label: 'Cost to community', value: '$0' },
      { label: 'Status', value: 'In capture' },
    ],
    body: [
      { kind: 'p', text: 'This case study is in capture. The full story — how Frntrw Foundation and the North Harbour Pasifika Hauora Collective built a partnership that unlocks cultural infrastructure for Pasifika youth athletic development — will publish here when content is finalised with the partner.' },
      { kind: 'p', text: 'For a preview of the partnership model and the outcomes it supports, see the Capability Statement.' },
    ],
  },
  {
    slug: 'coaches-who-showed-up',
    status: 'sample',
    pillar: 'Mentorship & Leadership',
    programme: 'Free Community Clinic',
    title: 'The coaches who showed up before the funding did.',
    posterTitle: 'The coaches who showed up before the funding did.',
    dek: 'Ten professional players. Zero salaries. Every young person coached at international standard.',
    date: 'Sample story · 2026',
    location: 'Auckland',
    heroImage: '/images/lane-community.jpg',
    outcomes: [
      { label: 'Coaches', value: '10' },
      { label: 'Coaching standard', value: 'Professional' },
      { label: 'Compensation', value: 'Volunteer' },
      { label: 'Status', value: 'In capture' },
    ],
    body: [
      { kind: 'p', text: 'This case study is in capture. The full story — how ten current and recent professional players assembled around Census Johnston’s mandate and delivered the foundation’s first three years of programming on a volunteer basis — will publish here when content is finalised.' },
      { kind: 'p', text: 'For a preview of the coaching model and pastoral mentorship framework, see the Capability Statement.' },
    ],
  },
]

export function getStory(slug: string): Story | undefined {
  return STORIES.find(s => s.slug === slug)
}

export function getStorySlugs(): string[] {
  return STORIES.map(s => s.slug)
}
