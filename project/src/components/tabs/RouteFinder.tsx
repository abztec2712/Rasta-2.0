import React, { useState } from 'react';
import { Bus, MapPin, BellRing } from 'lucide-react';

export const RouteFinder: React.FC = () => {
  const [showLiveTracking, setShowLiveTracking] = useState(false);
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <Bus className="mr-2 text-blue-600" size={24} />
        Bus Route Finder
      </h2>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Starting Point</label>
              <select className="input-field">
                <option value="">Select starting point</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <select className="input-field">
                <option value="">Select destination</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Travel</label>
              <input 
                type="date" 
                className="input-field"
                placeholder="dd-mm-yyyy"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time of Travel</label>
              <select className="input-field">
                <option value="">Select time</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                <option value="evening">Evening (6 PM - 12 AM)</option>
                <option value="night">Night (12 AM - 6 AM)</option>
              </select>
            </div>
            
            <button className="btn-primary">
              Find Routes
            </button>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="map-container">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Interactive Map will be displayed here</p>
            </div>
            
            {/* Map Controls */}
            <div className="absolute top-2 right-2 bg-white rounded-md shadow-md p-2">
              <div className="flex flex-col space-y-2">
                <button className="p-2 rounded-md hover:bg-gray-100" title="Standard View">
                  <MapPin size={20} />
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100" title="Satellite View">
                  <MapPin size={20} />
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100" title="Terrain View">
                  <MapPin size={20} />
                </button>
              </div>
            </div>
            
            {/* Live Tracking Toggle */}
            <div className="absolute bottom-2 left-2">
              <button 
                className="flex items-center space-x-2 bg-white rounded-md shadow-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setShowLiveTracking(!showLiveTracking)}
              >
                <BellRing size={16} />
                <span>{showLiveTracking ? 'Live Tracking On' : 'Enable Live Tracking'}</span>
              </button>
            </div>
          </div>
          
          {/* Route Information */}
          <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Route Information</h3>
            {selectedRoute ? (
              <div className="route-details">
                {/* Route details will be populated from database */}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Select a route to view detailed information</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};