import React from 'react';
import { MapPin, Info, Settings } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TN Bus Navigator</h3>
            <p className="text-gray-300 text-sm">
              Official bus route navigator and tracker for Tamil Nadu State Transport Corporation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                Chennai, Tamil Nadu
              </li>
              <li className="flex items-center text-gray-300">
                <Info className="h-5 w-5 mr-2" />
                Toll-free: 1800-XXX-XXXX
              </li>
              <li className="flex items-center text-gray-300">
                <Settings className="h-5 w-5 mr-2" />
                Support: support@tnbus.gov.in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};