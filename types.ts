
export interface TeamMember {
  name: string;
  role: string;
  qualifications?: string;
  gdcNumber?: string;
  description: string;
  interests?: string[];
  imageUrl: string;
}

export interface FeeItem {
  description: string;
  price: string;
  category: string;
}

export interface DenplanRate {
  band: string;
  rate: string;
}
