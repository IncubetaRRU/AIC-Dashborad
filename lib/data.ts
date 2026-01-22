export interface Startup {
  id: string;
  name: string;
  domain: string;
  stage: 'Ideation' | 'MVP' | 'Early Traction' | 'Scaling';
  mode: 'Physical' | 'Virtual' | 'Hybrid';
  state: string;
  dateJoined: string;
}

export const startups: Startup[] = [
  { id: '1', name: 'Quantum Leap AI', domain: 'Artificial Intelligence', stage: 'Scaling', mode: 'Physical', state: 'Karnataka', dateJoined: '2023-01-15' },
  { id: '2', name: 'HealthSync', domain: 'Healthcare', stage: 'MVP', mode: 'Hybrid', state: 'Maharashtra', dateJoined: '2023-03-22' },
  { id: '3', name: 'FinFlow', domain: 'Fintech', stage: 'Early Traction', mode: 'Virtual', state: 'Delhi', dateJoined: '2023-05-10' },
  { id: '4', name: 'EduSpark', domain: 'Edtech', stage: 'Ideation', mode: 'Virtual', state: 'Tamil Nadu', dateJoined: '2023-06-05' },
  { id: '5', name: 'GreenGrid', domain: 'Sustainability', stage: 'Scaling', mode: 'Physical', state: 'Gujarat', dateJoined: '2023-02-18' },
  { id: '6', name: 'AgriSmart', domain: 'Agriculture', stage: 'MVP', mode: 'Hybrid', state: 'Punjab', dateJoined: '2023-08-12' },
  { id: '7', name: 'SecureNet', domain: 'Cybersecurity', stage: 'Early Traction', mode: 'Physical', state: 'Karnataka', dateJoined: '2023-04-30' },
  { id: '8', name: 'LogiLink', domain: 'Logistics', stage: 'Scaling', mode: 'Hybrid', state: 'Maharashtra', dateJoined: '2023-07-25' },
  { id: '9', name: 'V-Retail', domain: 'E-commerce', stage: 'MVP', mode: 'Virtual', state: 'Telangana', dateJoined: '2023-09-01' },
  { id: '10', name: 'BioGen', domain: 'Healthcare', stage: 'Ideation', mode: 'Physical', state: 'Karnataka', dateJoined: '2023-11-14' },
];

export const stats = {
  total: 42,
  active: 38,
  graduated: 4,
  modes: [
    { name: 'Physical', value: 15 },
    { name: 'Virtual', value: 18 },
    { name: 'Hybrid', value: 9 },
  ],
  domains: [
    { name: 'AI', value: 12 },
    { name: 'Healthcare', value: 8 },
    { name: 'Fintech', value: 6 },
    { name: 'Edtech', value: 7 },
    { name: 'Others', value: 9 },
  ],
  stages: [
    { name: 'Ideation', value: 10 },
    { name: 'MVP', value: 15 },
    { name: 'Early Traction', value: 12 },
    { name: 'Scaling', value: 5 },
  ],
  states: [
    { name: 'Karnataka', value: 12 },
    { name: 'Maharashtra', value: 8 },
    { name: 'Delhi', value: 6 },
    { name: 'Telangana', value: 5 },
    { name: 'Gujarat', value: 4 },
    { name: 'Tamil Nadu', value: 4 },
    { name: 'Others', value: 3 },
  ],
  monthlyGrowth: [
    { name: 'Jan', startups: 4 },
    { name: 'Feb', startups: 7 },
    { name: 'Mar', startups: 12 },
    { name: 'Apr', startups: 18 },
    { name: 'May', startups: 24 },
    { name: 'Jun', startups: 32 },
    { name: 'Jul', startups: 42 },
  ]
};

export const mentors = [
  { id: 1, name: 'Dr. Sarah Chen', expertise: 'AI & Machine Learning', startups: 4, image: 'SC' },
  { id: 2, name: 'Rajesh Kumar', expertise: 'Fintech & Blockchain', startups: 3, image: 'RK' },
  { id: 3, name: 'Priya Sharma', expertise: 'Marketing & Growth', startups: 6, image: 'PS' },
  { id: 4, name: 'James Wilson', expertise: 'Product Management', startups: 2, image: 'JW' },
  { id: 5, name: 'Anita Desai', expertise: 'Healthcare & Biotech', startups: 3, image: 'AD' },
  { id: 6, name: 'Michael Chang', expertise: 'Venture Capital', startups: 5, image: 'MC' },
];
