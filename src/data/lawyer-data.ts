
import { Lawyer } from "@/components/lawyer-finder/lawyer-card";

// Mock data for lawyers
export const SAMPLE_LAWYERS: Lawyer[] = [
  {
    id: "1",
    name: "Maria Rodriguez, Esq.",
    firm: "Rodriguez Immigration Law",
    state: "CA",
    city: "Los Angeles",
    zip: "90012",
    phone: "(213) 555-7890",
    email: "maria@rodriguezlaw.example.com",
    languages: ["English", "Spanish"],
    proBono: true,
    specialties: ["Deportation Defense", "Asylum", "Family Petitions"],
    verified: true
  },
  {
    id: "2",
    name: "David Chen, J.D.",
    firm: "Asian American Legal Defense",
    state: "NY",
    city: "New York",
    zip: "10013",
    phone: "(212) 555-1234",
    email: "dchen@aaldf.example.org",
    languages: ["English", "Mandarin", "Cantonese"],
    proBono: true,
    specialties: ["Citizenship", "DACA", "Deportation Defense"],
    verified: true
  },
  {
    id: "3",
    name: "Amir Hassan",
    firm: "Hassan & Associates",
    state: "IL",
    city: "Chicago",
    zip: "60607",
    phone: "(312) 555-9876",
    languages: ["English", "Arabic", "French"],
    proBono: false,
    specialties: ["Business Immigration", "Employment Visas", "Green Cards"],
    verified: false
  },
  {
    id: "4",
    name: "Sarah Goldstein",
    firm: "Immigrant Justice Project",
    state: "TX",
    city: "Houston",
    zip: "77002",
    phone: "(713) 555-4567",
    email: "sgoldstein@ijp.example.org",
    languages: ["English", "Spanish", "Hebrew"],
    proBono: true,
    specialties: ["Asylum", "Deportation Defense", "Humanitarian Visas"],
    verified: true
  },
  {
    id: "5",
    name: "James Washington",
    firm: "Washington Law Group",
    state: "GA",
    city: "Atlanta",
    zip: "30303",
    phone: "(404) 555-8901",
    languages: ["English"],
    proBono: false,
    specialties: ["Employment Visas", "Family Petitions", "Naturalization"],
    verified: false
  },
  {
    id: "6",
    name: "Luisa Morales",
    firm: "Farmworker Justice Coalition",
    state: "FL",
    city: "Miami",
    zip: "33130",
    phone: "(305) 555-6543",
    email: "lmorales@fjc.example.org",
    languages: ["English", "Spanish"],
    proBono: true,
    specialties: ["Farmworker Rights", "Deportation Defense", "TPS"],
    verified: true
  }
];

// State abbreviations for the filter
export const US_STATES = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
  { code: "DC", name: "District of Columbia" }
];

// Common specialties for filtering
export const SPECIALTIES = [
  "Deportation Defense",
  "Asylum",
  "Family Petitions",
  "Employment Visas",
  "DACA",
  "Naturalization",
  "Green Cards",
  "Humanitarian Visas",
  "TPS",
  "Farmworker Rights",
  "Business Immigration",
  "Citizenship"
];

// Languages available
export const LANGUAGES = [
  "English",
  "Spanish",
  "Mandarin",
  "Cantonese",
  "Arabic",
  "French",
  "Hebrew",
  "Vietnamese",
  "Tagalog",
  "Korean",
  "Portuguese"
];
