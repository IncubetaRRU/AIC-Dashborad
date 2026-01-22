"use client";

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { startups, stats } from '@/lib/data';
import { Search, Filter, Download } from 'lucide-react';

const stageColors = {
  Ideation: 'bg-slate-100 text-slate-700',
  MVP: 'bg-blue-100 text-blue-700',
  'Early Traction': 'bg-amber-100 text-amber-700',
  Scaling: 'bg-green-100 text-green-700',
};

export default function StartupsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          startup.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === 'All' || startup.domain === selectedDomain;
    const matchesStage = selectedStage === 'All' || startup.stage === selectedStage;
    
    return matchesSearch && matchesDomain && matchesStage;
  });

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Startups Directory</h1>
              <p className="text-slate-500 mt-1">Manage and track all incubated startups.</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Filters */}
            <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search startups..."
                  className="pl-9 pr-4 py-2 w-full border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <select 
                  className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                >
                  <option value="All">All Domains</option>
                  {stats.domains.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
                </select>

                <select 
                  className="px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                >
                  <option value="All">All Stages</option>
                  {stats.stages.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Startup Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Domain</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Stage</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Mode</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">State</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStartups.length > 0 ? (
                    filteredStartups.map((startup) => (
                      <tr key={startup.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-sm font-medium text-slate-900">{startup.name}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600">{startup.domain}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${stageColors[startup.stage]}`}>
                            {startup.stage}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600">{startup.mode}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-600">{startup.state}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-500">{startup.dateJoined}</span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-slate-500 text-sm">
                        No startups found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
