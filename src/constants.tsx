
import { TeamMember, FeeItem, DenplanRate } from './types';

export const TEAM: TeamMember[] = [
  {
    name: "Dr Abhi Pal",
    role: "Practice Principal & Lead Clinician",
    qualifications: "BDS (London), MGDSRCSI, FFGDP (UK), FDSRCPS (Glasgow)",
    gdcNumber: "62049",
    imageUrl: "https://picsum.photos/seed/abhi/400/500",
    description: "Qualified Guy’s Hospital London in 1987 with honours and distinction. Abhi has been working at this practice since 1991. He has extensive experience in Restorative and Implant Dentistry. In June 2021, he became the first President of the College of General Dentistry."
  },
  {
    name: "Dr Ashis Colin Sinha",
    role: "Dentist",
    qualifications: "BDS, MFDS, DPDS (U.Bristol), Dip Rest Dent, MSc (U.Leeds), FFGDP (UK), FDS RCPS (Glas), FHEA",
    gdcNumber: "81566",
    imageUrl: "https://picsum.photos/seed/colin/400/500",
    description: "Colin graduated in 1998 and joined the practice in 2004. He has extensive training in Restorative Dentistry and currently serves as an examiner for the MJDF examinations at the Royal College of Surgeons England."
  },
  {
    name: "Dr Fatimah Jawaid",
    role: "Dentist",
    qualifications: "BDS (Birmingham), MFDSRCSEd, PGCert MedEd, MSc Prosthodontics (Kings)",
    gdcNumber: "229546",
    imageUrl: "https://picsum.photos/seed/fatimah/400/500",
    description: "Graduated with Distinction in 2012. Fatimah has an MSc in Fixed and Removable Prosthodontics and a keen interest in complex tooth wear and aesthetic dentistry."
  },
  {
    name: "Dr Shravan Tewary",
    role: "Dentist",
    qualifications: "BDS",
    gdcNumber: "275032",
    imageUrl: "https://picsum.photos/seed/shravan/400/500",
    description: "Specializes in orthodontics and is a certified Invisalign provider. Shravan also has expertise in dental photography."
  }
];

export const FEES: FeeItem[] = [
  { category: "Consultations", description: "New Patient Consultation (includes 2 small x-rays)", price: "£80" },
  { category: "Consultations", description: "Routine 6 Monthly Examination", price: "£50" },
  { category: "Consultations", description: "Emergency-only Consultation", price: "£70" },
  { category: "Hygiene", description: "Hygienist Session", price: "From £65" },
  { category: "Hygiene", description: "Scale and Polish with Dentist", price: "From £55" },
  { category: "Fillings", description: "Silver Amalgam Fillings", price: "From £130" },
  { category: "Fillings", description: "White Fillings", price: "From £150" },
  { category: "Root Canal", description: "Incisor", price: "£260" },
  { category: "Root Canal", description: "Molar", price: "£420" },
  { category: "Crowns & Veneers", description: "Crown and Bridge work (Per Unit)", price: "From £600" },
  { category: "Crowns & Veneers", description: "Veneer", price: "£600" },
  { category: "Implants", description: "Dental Implant (per Tooth)", price: "From £3000" },
  { category: "Invisalign", description: "Invisalign Treatment", price: "From £3950" }
];

export const DENPLAN_CARE_RATES: DenplanRate[] = [
  { band: "Band 1", rate: "£19.71" },
  { band: "Band 2", rate: "£25.53" },
  { band: "Band 3", rate: "£31.40" },
  { band: "Band 4", rate: "£41.88" },
  { band: "Band 5", rate: "£50.25" }
];
