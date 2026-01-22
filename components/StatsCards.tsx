import { stats } from '@/lib/data';
import { Users, CheckCircle2, GraduationCap, Globe } from 'lucide-react';

export default function StatsCards() {
  const cards = [
    { label: 'Total Startups', value: stats.total, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Startups', value: stats.active, icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Graduated', value: stats.graduated, icon: GraduationCap, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Incubation Modes', value: '3', icon: Globe, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div key={card.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{card.label}</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{card.value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${card.bg}`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
