import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Clock, AlertCircle, TrendingUp, Compass, MoreHorizontal } from 'lucide-react';

const FareEstimator = () => {
  const [serviceType, setServiceType] = useState('ride');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [estimatedPrice, setEstimatedPrice] = useState({
    distance: 13.3,
    price: null,
    time: '25 min'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [mapTheme, setMapTheme] = useState('standard');
  const mapRef = useRef(null);
  const pickupInputRef = useRef(null);
  const dropoffInputRef = useRef(null);
  const [pickupAutocomplete, setPickupAutocomplete] = useState(null);
  const [dropoffAutocomplete, setDropoffAutocomplete] = useState(null);
  
  // Theme detection for map styling (replace with your theme context if available)
  const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const mapStyles = {
    standard: [],
    dark: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
      { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
      { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
    ],
    silver: [
      { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
      { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9c9c9" }] },
    ],
    retro: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#f5f1e6" }] },
      { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#b9d3c2" }] },
    ],
  };
  
  // Initialize Google Maps and Autocomplete
  useEffect(() => {
    const initializeMap = () => {
      if (!window.google || !window.google.maps) {
        console.error('Google Maps API not available');
        return;
      }
      
      console.log('Initializing Google Maps...');
      
      // Create map instance
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 5.6037, lng: -0.1870 }, // Default center (Accra)
        zoom: 12,
        styles: darkMode ? mapStyles.dark : mapStyles[mapTheme],
        mapTypeControl: false,
        fullscreenControl: true,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM
        },
      });
      
      // Create directions service and renderer
      const directionsServiceInstance = new window.google.maps.DirectionsService();
      const directionsRendererInstance = new window.google.maps.DirectionsRenderer({
        map: mapInstance,
        suppressMarkers: false,
        polylineOptions: {
          strokeColor: '#FF6B00',
          strokeWeight: 5,
          strokeOpacity: 0.8,
        },
        markerOptions: {
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: '#FF6B00',
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: '#FFFFFF',
          }
        }
      });
      
      // Initialize autocomplete for pickup
      const pickupAutoComplete = new window.google.maps.places.Autocomplete(pickupInputRef.current, {
        componentRestrictions: { country: 'gh' }, // Restrict to Ghana
        fields: ['address_components', 'geometry', 'name', 'formatted_address'],
      });
      
      // Initialize autocomplete for dropoff
      const dropoffAutoComplete = new window.google.maps.places.Autocomplete(dropoffInputRef.current, {
        componentRestrictions: { country: 'gh' }, // Restrict to Ghana
        fields: ['address_components', 'geometry', 'name', 'formatted_address'],
      });
      
      // Add autocomplete listeners
      pickupAutoComplete.addListener('place_changed', () => {
        const place = pickupAutoComplete.getPlace();
        if (place.formatted_address) {
          setPickup(place.formatted_address);
        }
      });
      
      dropoffAutoComplete.addListener('place_changed', () => {
        const place = dropoffAutoComplete.getPlace();
        if (place.formatted_address) {
          setDropoff(place.formatted_address);
        }
      });
      
      setMap(mapInstance);
      setDirectionsService(directionsServiceInstance);
      setDirectionsRenderer(directionsRendererInstance);
      setPickupAutocomplete(pickupAutoComplete);
      setDropoffAutocomplete(dropoffAutoComplete);
    };
    
    // Load Google Maps API if it's not already loaded
    if (!window.google || !window.google.maps) {
      console.log('Loading Google Maps API script...');
      const script = document.createElement('script');
      
      // Make sure to replace this with your valid API key
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAG5ZidnV3a-wuHwUg8bd_hLrEVbTvWAno&libraries=places`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('Google Maps API script loaded successfully');
        initializeMap();
      };
      
      script.onerror = (error) => {
        console.error('Error loading Google Maps API script:', error);
      };
      
      document.head.appendChild(script);
    } else {
      console.log('Google Maps API already loaded');
      initializeMap();
    }
  }, [darkMode, mapTheme]);

  // Update map style when theme changes
  useEffect(() => {
    if (map) {
      map.setOptions({ styles: mapStyles[mapTheme] });
    }
  }, [mapTheme, map]);

  // Update directions when pickup or dropoff changes
  useEffect(() => {
    if (directionsService && directionsRenderer && pickup && dropoff) {
      const request = {
        origin: pickup,
        destination: dropoff,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };
      
      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
          
          // Update distance and price based on actual route
          const route = result.routes[0];
          if (route && route.legs[0]) {
            const distanceInMeters = route.legs[0].distance.value;
            const distanceInKm = distanceInMeters / 1000;
            const durationInSeconds = route.legs[0].duration.value;
            const durationInMinutes = Math.round(durationInSeconds / 60);
            
            // Calculate price
            const price = calculatePrice(distanceInKm);
            
            setEstimatedPrice({
              distance: distanceInKm.toFixed(1),
              price: price.toFixed(1),
              time: `${durationInMinutes} min`
            });
          }
        }
      });
    }
  }, [pickup, dropoff, directionsService, directionsRenderer]);

  // Sample pricing function - replace with your actual pricing logic
  const calculatePrice = (distanceInKm) => {
    const basePrice = 5; // Base fare in GH₵
    const pricePerKm = 1.2; // Price per km in GH₵
    return basePrice + (distanceInKm * pricePerKm);
  };

  const handleCheckPrice = (e) => {
    e.preventDefault();
    if (pickup && dropoff) {
      setIsLoading(true);
      
      if (directionsService) {
        const request = {
          origin: pickup,
          destination: dropoff,
          travelMode: window.google.maps.TravelMode.DRIVING,
        };
        
        directionsService.route(request, (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
            
            // Update price based on actual route
            const route = result.routes[0];
            if (route && route.legs[0]) {
              const distanceInMeters = route.legs[0].distance.value;
              const distanceInKm = distanceInMeters / 1000;
              const durationInSeconds = route.legs[0].duration.value;
              const durationInMinutes = Math.round(durationInSeconds / 60);
              
              const price = calculatePrice(distanceInKm);
              
              setEstimatedPrice({
                distance: distanceInKm.toFixed(1),
                price: price.toFixed(1),
                time: `${durationInMinutes} min`
              });
            }
          }
          setIsLoading(false);
        });
      } else {
        // Fallback if directions service is not available
        setTimeout(() => {
          const distance = 13.3; // Example distance
          const price = calculatePrice(distance);
          setEstimatedPrice({
            distance: distance,
            price: price,
            time: '25 min'
          });
          setIsLoading(false);
        }, 1000);
      }
    }
  };

  return (
    <section className="py-12 px-6 relative overflow-hidden bg-gray-50 dark:bg-gray-900" id="fare-check">
      {/* Background gradient design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Heading with accent element */}
        <div className="text-center mb-12 relative">
          <span className="text-orange-500 font-medium tracking-wide uppercase text-sm mb-3 inline-block">Fast & Accurate</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Estimate Your Fare in Seconds
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Plan your rides and deliveries across Ghana with our Quick Fare Calculator.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map area */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden order-2 lg:order-1 h-full">
            <div className="h-full min-h-[450px] relative">
              {/* Map theme selector */}
              <div className="absolute top-4 left-4 z-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-1">
                <div className="flex space-x-1">
                  <button 
                    onClick={() => setMapTheme('standard')}
                    className={`p-2 rounded-md transition-all ${mapTheme === 'standard' ? 'bg-orange-100 dark:bg-gray-700 text-orange-500' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    title="Standard"
                  >
                    <Compass size={18} />
                  </button>
                  <button 
                    onClick={() => setMapTheme('silver')}
                    className={`p-2 rounded-md transition-all ${mapTheme === 'silver' ? 'bg-orange-100 dark:bg-gray-700 text-orange-500' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    title="Silver"
                  >
                    <MapPin size={18} />
                  </button>
                  <button 
                    onClick={() => setMapTheme('dark')}
                    className={`p-2 rounded-md transition-all ${mapTheme === 'dark' ? 'bg-orange-100 dark:bg-gray-700 text-orange-500' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    title="Dark"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
              
              {/* Google Maps container */}
              <div 
                ref={mapRef} 
                className="absolute inset-0 bg-gray-100 dark:bg-gray-700"
              ></div>
              
              {/* Map overlay with trip stats */}
              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 p-6 transition-all">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm">Estimated Time: <strong>{estimatedPrice.time}</strong></span>
                    </div>
                    <div className="flex items-center mt-2">
                      <TrendingUp size={16} className="mr-2" />
                      <span className="text-sm">Distance: <strong>{estimatedPrice.distance} km</strong></span>
                    </div>
                  </div>
                  <div className="text-right">
                    {estimatedPrice.price && (
                      <>
                        <span className="text-xs uppercase">Estimated Fare</span>
                        <div className="text-2xl font-bold">GH₵ {estimatedPrice.price}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form area */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 order-1 lg:order-2">
            {/* Service Type Selector */}
            <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-full mb-8">
              <button 
                className={`flex-1 py-3 px-4 rounded-full font-medium text-center transition-all duration-200 ${
                  serviceType === 'ride' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setServiceType('ride')}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 17l4 4 4-4M12 12v9" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Ride
                </span>
              </button>
              <button 
                className={`flex-1 py-3 px-4 rounded-full font-medium text-center transition-all duration-200 ${
                  serviceType === 'delivery' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setServiceType('delivery')}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="18" height="12" rx="2" />
                    <path d="M10 16v2M14 16v2" />
                    <path d="M2 10h18" />
                  </svg>
                  Delivery
                </span>
              </button>
            </div>
            
            <form onSubmit={handleCheckPrice}>
              {/* Pickup input */}
              <div className="mb-6">
                <label htmlFor="pickup" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Pickup Location</label>
                <div className="relative group">
                  <MapPin size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" />
                  <input
                    ref={pickupInputRef}
                    type="text"
                    id="pickup"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="Enter pickup location"
                    required
                  />
                  <div className="absolute inset-0 border border-orange-500 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                </div>
              </div>
              
              {/* Dropoff input */}
              <div className="mb-8">
                <label htmlFor="dropoff" className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Drop-off Location</label>
                <div className="relative group">
                  <Navigation size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" />
                  <input
                    ref={dropoffInputRef}
                    type="text"
                    id="dropoff"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    placeholder="Enter destination"
                    required
                  />
                  <div className="absolute inset-0 border border-orange-500 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
                </div>
              </div>
              
              {/* Fare Estimate Results */}
              {(pickup && dropoff && estimatedPrice.price) && (
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white mb-8 shadow-lg animate-fadeIn">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Estimated Fare</h3>
                      <p className="opacity-90 text-sm">Distance: {estimatedPrice.distance} km · {estimatedPrice.time}</p>
                    </div>
                    <div className="text-3xl font-bold">GH₵ {estimatedPrice.price}</div>
                  </div>
                </div>
              )}
              
              {/* Action button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Calculating...
                    </span>
                  ) : (
                    `Check ${serviceType === 'delivery' ? 'Delivery' : 'Ride'} Price`
                  )}
                </button>
              </div>
              
              {/* Additional information */}
              <div className="mt-6 flex items-start">
                <AlertCircle size={16} className="text-gray-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Actual price may vary based on traffic conditions, waiting time, and other factors. Fixed rates are available for airport transfers.
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="bg-orange-100 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Real-time Pricing</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Accurate estimates based on current traffic conditions</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="bg-orange-100 dark:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-orange-500" size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Full City Coverage</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Reliable service throughout Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareEstimator;