export interface TravelPlan {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  name: string;
  date: string;
  location: string;
  category: 'sightseeing' | 'dining' | 'adventure' | 'culture';
}

export interface JournalEntry {
  id: string;
  date: string;
  location: string;
  content: string;
  imageUrl?: string;
}