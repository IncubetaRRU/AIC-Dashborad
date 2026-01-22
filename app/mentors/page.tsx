"use client";

import Sidebar from '@/components/Sidebar';
import { mentors } from '@/lib/data';
import { Search, Mail, ExternalLink } from 'lucide-react';

export default function MentorsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
             <div>
              <h1 className="text-2xl font-bold text-slate-900">Mentor Network</h1>
              <p className="text-slate-500 mt-1">Connect startups with industry experts.</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
              Invite Mentor
            </button>
          </div>

          <div className="relative mb-8 max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search mentors by name or expertise..."
              className="pl-9 pr-4 py-2 w-full border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg border border-indigo-200">
                      {mentor.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{mentor.name}</h3>
                      <p className="text-xs text-slate-500 font-medium">{mentor.expertise}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Mentoring</span>
                    <span className="font-medium text-slate-900">{mentor.startups} Startups</span>
                  </div>
                  
                  <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-50 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-50 transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
