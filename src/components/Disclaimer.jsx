import React from 'react';
import { AlertCircle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-blue-800 font-medium mb-2">
            Non-Clinical Self-Awareness Tool
          </p>
          <p className="text-sm text-blue-700 leading-relaxed">
            Project AURA is a non-clinical self-awareness tool. Its results are intended to help you reflect on patterns in your experiences and identify areas that may be useful to explore. They are not a medical or psychological diagnosis.
          </p>
          <p className="text-sm text-blue-700 leading-relaxed mt-2">
            If these experiences are significantly affecting your daily life or causing distress, consider speaking with a qualified mental-health professional, counselor, trusted adult, or another appropriate support person.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
