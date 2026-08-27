import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl card-shadow hover:shadow-lg transition-smooth">
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-primary-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;
