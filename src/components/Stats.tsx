import React from 'react';
import { Clock, Star, ThumbsUp, Users } from 'lucide-react';

export function Stats() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-[#14a800]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">6000+</h3>
            <p className="text-gray-600">Hours on Upwork</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-[#14a800]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">4.9</h3>
            <p className="text-gray-600">Star Rating</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ThumbsUp className="w-12 h-12 text-[#14a800]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-[#14a800]" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}