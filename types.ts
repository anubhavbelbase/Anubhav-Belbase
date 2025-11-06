export enum ComplaintStatus {
  New = 'New',
  InProgress = 'In Progress',
  Resolved = 'Resolved',
  Rejected = 'Rejected',
}

export enum ComplaintCategory {
  WasteManagement = 'Waste Management',
  Roads = 'Roads & Potholes',
  Streetlights = 'Streetlights',
  WaterSupply = 'Water Supply',
  PublicTransport = 'Public Transport',
  Other = 'Other',
}

export enum UserRole {
    Admin = 'Admin',
    Moderator = 'Moderator',
}

export interface Complaint {
  id: string;
  category: ComplaintCategory;
  description: string;
  status: ComplaintStatus;
  submittedBy: string;
  date: string; // ISO 8601 format
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  imageUrl?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    lastActive: string; // ISO 8601 format
    avatarUrl: string;
}

export type ViewType = 'dashboard' | 'complaints' | 'analytics' | 'users' | 'settings';