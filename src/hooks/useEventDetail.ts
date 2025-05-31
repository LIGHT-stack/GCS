
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../data/eventsData';

/**
 * Hook to retrieve event data based on URL parameter
 * 
 * @returns {object} The event data or undefined if not found
 */
export function useEventDetail() {
  const { eventId } = useParams<{ eventId: string }>();
  
  const eventData = useMemo(() => {
    if (!eventId) return null;
    
    // Try to find the event in our data
    if (eventId in eventsData) {
      return eventsData[eventId as keyof typeof eventsData];
    }
    
    // If not found directly, try to match it to a known event
    const eventKeys = Object.keys(eventsData);
    const matchedKey = eventKeys.find(key => 
      key.toLowerCase().includes(eventId.toLowerCase()) || 
      eventsData[key as keyof typeof eventsData].name.toLowerCase().includes(eventId.toLowerCase())
    );
    
    if (matchedKey) {
      return eventsData[matchedKey as keyof typeof eventsData];
    }
    
    // Fallback to the first event if nothing matches
    return eventsData["annual-chemistry-conference-2025"];
  }, [eventId]);
  
  return eventData;
}
