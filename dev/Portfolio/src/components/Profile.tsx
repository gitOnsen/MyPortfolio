import React from 'react';
import { myProfile } from '@/data/profile';

export const Profile = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-3xl mx-auto">
      <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-2xl p-10 shadow-sm transition-all hover:shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">About Me</h2>
        
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{myProfile.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {myProfile.university} / {myProfile.circle}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <p className="leading-relaxed">{myProfile.bio}</p>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Links</h4>
            <div className="flex flex-wrap gap-4">
              {myProfile.snsLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
