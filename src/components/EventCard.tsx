import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onGetTickets: (eventId: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onGetTickets }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={event.imageUrl} 
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {event.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(event.date).toLocaleDateString('en-AU', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Ticket className="w-4 h-4 mr-2" />
            <span>{event.price}</span>
          </div>
        </div>
        
        <button
          onClick={() => onGetTickets(event.id)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Get Tickets
        </button>
      </div>
    </div>
  );
};