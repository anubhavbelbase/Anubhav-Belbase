import { Complaint, ComplaintCategory, ComplaintStatus, User, UserRole } from './types';

export const MOCK_COMPLAINTS: Complaint[] = [
  {
    id: 'CCN-001',
    category: ComplaintCategory.WasteManagement,
    description: 'Overflowing dustbin at New Road Gate, causing a public nuisance.',
    status: ComplaintStatus.New,
    submittedBy: 'Anjali Sharma',
    date: '2024-07-22T09:15:00Z',
    location: { lat: 27.7007, lng: 85.3001, address: 'New Road Gate, Kathmandu' },
    imageUrl: 'https://picsum.photos/seed/waste1/400/300',
  },
  {
    id: 'CCN-002',
    category: ComplaintCategory.Roads,
    description: 'Large pothole on the main road in Baneshwor, near the convention center.',
    status: ComplaintStatus.InProgress,
    submittedBy: 'Bikram Thapa',
    date: '2024-07-21T14:30:00Z',
    location: { lat: 27.693, lng: 85.343, address: 'Baneshwor, Kathmandu' },
    imageUrl: 'https://picsum.photos/seed/road1/400/300',
  },
  {
    id: 'CCN-003',
    category: ComplaintCategory.Streetlights,
    description: 'Streetlight not working for the past 3 days in Jawalakhel.',
    status: ComplaintStatus.Resolved,
    submittedBy: 'Sunita Maharjan',
    date: '2024-07-19T20:00:00Z',
    location: { lat: 27.674, lng: 85.315, address: 'Jawalakhel, Lalitpur' },
  },
  {
    id: 'CCN-004',
    category: ComplaintCategory.WaterSupply,
    description: 'Leaking water pipe near Patan Durbar Square.',
    status: ComplaintStatus.Resolved,
    submittedBy: 'Rajesh Pradhan',
    date: '2024-07-20T11:45:00Z',
    location: { lat: 27.672, lng: 85.325, address: 'Patan Durbar Square, Lalitpur' },
    imageUrl: 'https://picsum.photos/seed/water1/400/300',
  },
  {
    id: 'CCN-005',
    category: ComplaintCategory.PublicTransport,
    description: 'Bus stop shelter damaged in Thapathali.',
    status: ComplaintStatus.New,
    submittedBy: 'Prakash Koirala',
    date: '2024-07-22T12:05:00Z',
    location: { lat: 27.691, lng: 85.319, address: 'Thapathali, Kathmandu' },
  },
  {
    id: 'CCN-006',
    category: ComplaintCategory.WasteManagement,
    description: 'Illegal dumping of construction debris in the Bagmati river bank area.',
    status: ComplaintStatus.InProgress,
    submittedBy: 'Gita Pandey',
    date: '2024-07-20T18:20:00Z',
    location: { lat: 27.685, lng: 85.328, address: 'Bagmati Corridor' },
    imageUrl: 'https://picsum.photos/seed/waste2/400/300',
  },
  {
    id: 'CCN-007',
    category: ComplaintCategory.Roads,
    description: 'Missing manhole cover on a busy street in Asan.',
    status: ComplaintStatus.New,
    submittedBy: 'Hari Joshi',
    date: '2024-07-23T08:00:00Z',
    location: { lat: 27.707, lng: 85.311, address: 'Asan Tole, Kathmandu' },
    imageUrl: 'https://picsum.photos/seed/road2/400/300',
  },
  {
    id: 'CCN-008',
    category: ComplaintCategory.Streetlights,
    description: 'Flickering streetlight in Lazimpat, near the embassy area.',
    status: ComplaintStatus.InProgress,
    submittedBy: 'Nisha Gurung',
    date: '2024-07-22T22:10:00Z',
    location: { lat: 27.721, lng: 85.323, address: 'Lazimpat, Kathmandu' },
  },
    {
    id: 'CCN-009',
    category: ComplaintCategory.WaterSupply,
    description: 'No water supply in the Kirtipur area for the last 24 hours.',
    status: ComplaintStatus.New,
    submittedBy: 'Ramesh Adhikari',
    date: '2024-06-15T10:00:00Z',
    location: { lat: 27.679, lng: 85.276, address: 'Kirtipur, Kathmandu' },
  },
  {
    id: 'CCN-010',
    category: ComplaintCategory.Other,
    description: 'Stray dogs are becoming a problem in the neighborhood.',
    status: ComplaintStatus.Rejected,
    submittedBy: 'Sita Rai',
    date: '2024-06-12T16:45:00Z',
    location: { lat: 27.714, lng: 85.336, address: 'Chabahil, Kathmandu' },
  },
];

export const MOCK_USERS: User[] = [
    {
        id: 'user-01',
        name: 'Admin',
        email: 'administrator@civic.gov.np',
        role: UserRole.Admin,
        lastActive: '2024-07-23T10:00:00Z',
        avatarUrl: 'https://picsum.photos/seed/admin/100/100',
    },
    {
        id: 'user-02',
        name: 'Ram Bahadur',
        email: 'ram.bahadur@civic.gov.np',
        role: UserRole.Moderator,
        lastActive: '2024-07-22T15:30:00Z',
        avatarUrl: 'https://picsum.photos/seed/ram/100/100',
    },
    {
        id: 'user-03',
        name: 'Sita Devi',
        email: 'sita.devi@civic.gov.np',
        role: UserRole.Moderator,
        lastActive: '2024-07-23T09:05:00Z',
        avatarUrl: 'https://picsum.photos/seed/sita/100/100',
    },
    {
        id: 'user-04',
        name: 'Gopal Prasad',
        email: 'gopal.prasad@civic.gov.np',
        role: UserRole.Moderator,
        lastActive: '2024-07-21T11:20:00Z',
        avatarUrl: 'https://picsum.photos/seed/gopal/100/100',
    }
]


export const STATUS_COLORS: { [key in ComplaintStatus]: string } = {
  [ComplaintStatus.New]: 'bg-blue-100 text-blue-800',
  [ComplaintStatus.InProgress]: 'bg-yellow-100 text-yellow-800',
  [ComplaintStatus.Resolved]: 'bg-green-100 text-green-800',
  [ComplaintStatus.Rejected]: 'bg-red-100 text-red-800',
};

export const CHART_COLORS = ['#2563EB', '#f97316', '#10b981', '#ef4444', '#8b5cf6', '#eab308'];