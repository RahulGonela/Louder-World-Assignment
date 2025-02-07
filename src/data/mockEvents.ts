import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Sydney Opera House - Symphony Under the Stars',
    description: 'Experience a magical evening of classical music at the iconic Sydney Opera House.',
    date: '2024-03-25',
    time: '19:30',
    venue: 'Sydney Opera House',
    imageUrl: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/1',
    price: '$89',
    category: 'Music'
  },
  {
    id: '2',
    title: 'Vivid Sydney Light Festival',
    description: 'Annual festival of light, music and ideas featuring spectacular light installations.',
    date: '2024-04-15',
    time: '18:00',
    venue: 'Circular Quay',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/2',
    price: 'Free',
    category: 'Festival'
  },
  {
    id: '3',
    title: 'Sydney Food & Wine Festival',
    description: 'Celebrate the finest in Australian cuisine and wines with top chefs and sommeliers.',
    date: '2024-04-20',
    time: '11:00',
    venue: 'The Rocks',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80',
    ticketUrl: 'https://example.com/tickets/3',
    price: '$120',
    category: 'Food & Drink'
  }
];