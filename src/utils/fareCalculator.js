// Mock function for distance calculation (would be replaced with Google Maps API)
export const calculateDistance = (pickup, dropoff) => {
    // This is a simple mock - in reality you'd use coordinates and proper distance calculation
    const locations = {
      'accra': { lat: 5.6037, lng: -0.1870 },
      'kumasi': { lat: 6.6885, lng: -1.6244 },
      'tamale': { lat: 9.4075, lng: -0.8533 },
      'takoradi': { lat: 4.9047, lng: -1.7740 },
    };
    
    // Default to a random distance if locations aren't found
    if (!locations[pickup?.toLowerCase()] || !locations[dropoff?.toLowerCase()]) {
      return Math.floor(Math.random() * 20) + 5; // Random distance between 5-25km
    }
    
    // Very basic distance calculation (not accurate, just for demo)
    const p = locations[pickup.toLowerCase()];
    const d = locations[dropoff.toLowerCase()];
    const distance = Math.sqrt(Math.pow(p.lat - d.lat, 2) + Math.pow(p.lng - d.lng, 2)) * 111; // Rough km conversion
    
    return Math.round(distance);
  };
  
  // Mock pricing function
  export const calculatePrice = (distance) => {
    const basePrice = 5; // Base price in Ghana Cedis
    const pricePerKm = 1.2; // Price per km in Ghana Cedis
    return Math.round((basePrice + (distance * pricePerKm)) * 10) / 10; // Round to 1 decimal place
  };