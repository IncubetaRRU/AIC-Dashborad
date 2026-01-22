"use client";

import Sidebar from '@/components/Sidebar';
import { Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
            <p className="text-slate-500 mt-1">Manage your account and dashboard preferences.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Dashboard Name</label>
                  <input type="text" defaultValue="AIC Incubation Center" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Admin Email</label>
                  <input type="email" defaultValue="admin@aic-rru.org" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
            </div>

             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Notifications</h3>
               <div className="space-y-3">
                 <label className="flex items-center gap-3">
                   <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                   <span className="text-sm text-slate-700">Email me when a new startup applies</span>
                 </label>
                 <label className="flex items-center gap-3">
                   <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                   <span className="text-sm text-slate-700">Weekly analytics report</span>
                 </label>
               </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
