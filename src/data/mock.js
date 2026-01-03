// Mock data for DJ Modernaire portfolio

export const siteConfig = {
  name: "DJ Modernaire",
  logo: "https://customer-assets.emergentagent.com/job_4eaef118-a16c-48dd-b5f2-540757867b7a/artifacts/9t0n8wav_IMG_0488.png",
  tagline: "Premium Audio & Curated Music by Denard Jones",
  location: "Birmingham, AL",
  phone: "(205) 396-9959",
  photo: "https://customer-assets.emergentagent.com/job_4eaef118-a16c-48dd-b5f2-540757867b7a/artifacts/rq01avhv_Untitled%20design%20-%201.png",
};

export const heroData = {
  headline: "Unforgettable Events.",
  subheadline: "Experience the Difference.",
  description: "Premium Audio & Curated Music by Denard Jones",
  cta: "Book Your Date",
};

export const aboutData = {
  title: "Precision & Quality",
  description: "With over a decade of experience, DJ Modernaire delivers unparalleled audio excellence using top-tier RANE motorized controllers. Every event is crafted with precision, professionalism, and a commitment to creating unforgettable moments.",
  highlights: [
    "Premium RANE Equipment",
    "10+ Years Experience",
    "500+ Events",
    "Birmingham, AL Based"
  ],
  gearDescription: "Equipped with state-of-the-art RANE motorized controllers and premium sound systems, we deliver crystal-clear audio that transforms any venue into an immersive experience."
};

export const clientsData = [
  { name: "Apple Inc.", id: 1 },
  { name: "Keller Williams", id: 2 },
  { name: "Jefferson County DA", id: 3 },
  { name: "Alpha Kappa Alpha", id: 4 },
  { name: "Delta Sigma Theta", id: 5 },
  { name: "Tuskegee University", id: 6 },
  { name: "Magic City Classic", id: 7 },
];

export const servicesData = [
  {
    id: 1,
    title: "Weddings",
    tagline: "Timeliness & Reliability",
    description: "Your special day deserves perfect sound. From romantic first dances to energetic receptions, we create seamless musical journeys that complement every moment.",
    icon: "heart"
  },
  {
    id: 2,
    title: "Corporate",
    tagline: "Professional Atmosphere",
    description: "Elevate your corporate events with sophisticated sound design. From conferences to galas, we bring professionalism and premium audio to every business occasion.",
    icon: "briefcase"
  },
  {
    id: 3,
    title: "Private Events",
    tagline: "High-Energy Sets",
    description: "Birthday parties, anniversaries, or private celebrations—we bring the energy and curate playlists that keep your guests dancing all night long.",
    icon: "music"
  }
];

export const contactFormFields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "(123) 456-7890", required: false },
  { name: "eventDate", label: "Event Date", type: "date", placeholder: "", required: true },
  { name: "eventType", label: "Event Type", type: "select", options: ["Wedding", "Corporate", "Private Event", "Other"], required: true },
  { name: "message", label: "Tell Us About Your Event", type: "textarea", placeholder: "Share details about your event...", required: false }
];

// Mock submissions storage (will be replaced with backend)
export let mockSubmissions = [];

export const addMockSubmission = (submission) => {
  const newSubmission = {
    ...submission,
    id: Date.now(),
    createdAt: new Date().toISOString(),
    status: "pending"
  };
  mockSubmissions.push(newSubmission);
  return newSubmission;
};
