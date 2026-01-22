import { startups } from '@/lib/data';

const stageColors = {
  Ideation: 'bg-slate-100 text-slate-700',
  MVP: 'bg-blue-100 text-blue-700',
  'Early Traction': 'bg-amber-100 text-amber-700',
  Scaling: 'bg-green-100 text-green-700',
};

export default function StartupTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Recent Startups</h3>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Startup Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Domain</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Stage</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Mode</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Joined Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {startups.map((startup) => (
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
                  <span className="text-sm text-slate-500">{startup.dateJoined}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
