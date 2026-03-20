import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChevronDown, Plus, Download, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PROJECT_START_DATE = new Date(2026, 2, 17); // March 17, 2026
const UN_SUBMISSION_DEADLINE = new Date(2026, 2, 19); // March 19, 2026
const WEBSITE_DEADLINE = new Date(2026, 2, 20); // March 20, 2026
const CHARTER_DEADLINE = new Date(2026, 2, 20); // March 20, 2026
const EXAM_DEADLINE = new Date(2026, 6, 9); // July 9, 2026

// Utility functions
const getTodayDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const daysUntil = (targetDate) => {
  const today = getTodayDate();
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: date.getFullYear() === 2026 ? undefined : 'numeric' });
};

const formatDateRange = () => {
  const today = getTodayDate();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const options = { month: 'short', day: 'numeric' };
  const todayStr = today.toLocaleDateString('en-US', options);
  const tomorrowStr = tomorrow.toLocaleDateString('en-US', options);
  return `${todayStr}–${tomorrowStr}, 2026`;
};

const formatTodayLabel = () => {
  const today = getTodayDate();
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  return today.toLocaleDateString('en-US', options);
};

export default function ProjectDashboard() {
  const [ragState, setRagState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kcg_rag')) || {};
    } catch {
      return {};
    }
  });

  const [taskState, setTaskState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kcg_tasks')) || {};
    } catch {
      return {};
    }
  });

  const [resourceState, setResourceState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kcg_resources')) || {};
    } catch {
      return {};
    }
  });

  const [sortCol, setSortCol] = useState(-1);
  const [sortAsc, setSortAsc] = useState(true);
  const [editPanelOpen, setEditPanelOpen] = useState(false);

  // Force re-render every 60 seconds to keep dates fresh (living dashboard)
  useEffect(() => {
    const interval = setInterval(() => {
      setResourceState(prev => ({...prev}));
    }, 60000); // Re-render every 60 seconds

    return () => clearInterval(interval);
  }, []);

  // Workstreams data
  const workstreams = [
    {
      id: 'WS-01',
      name: 'KCG Website Punch List',
      phase: 'Executing',
      priority: 'High',
      deadline: formatDate(WEBSITE_DEADLINE),
      daysLeft: daysUntil(WEBSITE_DEADLINE),
      next: 'Draft credibility content; source & finalize testimonials. Mobile testing + voice fixes to follow.'
    },
    {
      id: 'WS-02',
      name: 'UN Submissions',
      phase: 'Executing → Closing',
      priority: 'Critical',
      deadline: formatDate(UN_SUBMISSION_DEADLINE),
      daysLeft: daysUntil(UN_SUBMISSION_DEADLINE),
      next: 'Submit Wave 5 today. Initiate follow-up log for Waves 1–4.'
    },
    {
      id: 'WS-03',
      name: 'Nonprofit Applications',
      phase: 'Initiating',
      priority: 'High',
      deadline: 'TBD',
      daysLeft: null,
      next: 'Complete application inventory. Prioritize by deadline and fit. Schedule tasks into calendar.'
    },
    {
      id: 'WS-04',
      name: 'PMP Exam Prep',
      phase: 'Planning',
      priority: 'High',
      deadline: formatDate(EXAM_DEADLINE),
      daysLeft: daysUntil(EXAM_DEADLINE),
      next: 'Register for exam via PMI.org. Run diagnostic test. Schedule 5–7 hrs/week study blocks.'
    },
    {
      id: 'WS-05',
      name: 'Project Charter — KCG BD',
      phase: 'Initiating',
      priority: 'Medium',
      deadline: formatDate(CHARTER_DEADLINE),
      daysLeft: daysUntil(CHARTER_DEADLINE),
      next: 'Draft charter: purpose, objectives, scope, stakeholders, constraints, success criteria.'
    }
  ];

  // Calculate health and KPIs
  const getRAG = (wsId) => ragState[wsId] || (workstreams.find(w => w.id === wsId)?.rag || 'AMBER');

  const counts = { RED: 0, AMBER: 0, GREEN: 0 };
  workstreams.forEach(w => counts[getRAG(w.id)]++);

  const taskCounts = { total: 0, done: 0 };
  Object.values(taskState).forEach(done => {
    taskCounts.total++;
    if (done) taskCounts.done++;
  });

  const healthStatus = counts.RED > 0 ? 'RED' : counts.AMBER > 0 ? 'AMBER' : 'GREEN';
  const healthColor = healthStatus === 'RED' ? '#dc2626' : healthStatus === 'AMBER' ? '#d97706' : '#16a34a';

  // Chart data
  const ragChartData = [
    { name: 'RED', value: counts.RED, fill: '#dc2626' },
    { name: 'AMBER', value: counts.AMBER, fill: '#d97706' },
    { name: 'GREEN', value: counts.GREEN, fill: '#16a34a' }
  ];

  const deadlineData = workstreams
    .filter(w => w.daysLeft !== null)
    .map(w => ({
      id: w.id,
      daysLeft: w.daysLeft,
      fill: w.daysLeft <= 0 ? '#dc2626' : w.daysLeft <= 3 ? '#d97706' : '#16a34a'
    }));

  // Handlers
  const changeRAG = (wsId, value) => {
    const newState = { ...ragState, [wsId]: value };
    setRagState(newState);
    localStorage.setItem('kcg_rag', JSON.stringify(newState));
  };

  const sortTable = (col) => {
    if (sortCol === col) {
      setSortAsc(!sortAsc);
    } else {
      setSortCol(col);
      setSortAsc(true);
    }
  };

  const sortedWorkstreams = [...workstreams].sort((a, b) => {
    if (sortCol < 0) return 0;

    const keys = ['id', 'name', 'phase', 'rag', 'priority', 'deadline', 'daysLeft'];
    const key = keys[sortCol];

    let va = a[key];
    let vb = b[key];

    if (key === 'rag') {
      va = getRAG(a.id);
      vb = getRAG(b.id);
    }

    if (typeof va === 'number' || typeof vb === 'number') {
      return sortAsc ? (va ?? 999) - (vb ?? 999) : (vb ?? 999) - (va ?? 999);
    }

    return sortAsc
      ? String(va || '').localeCompare(String(vb || ''))
      : String(vb || '').localeCompare(String(va || ''));
  });

  const resetAll = () => {
    if (window.confirm('Reset all RAG status changes and task completions?')) {
      localStorage.removeItem('kcg_rag');
      localStorage.removeItem('kcg_tasks');
      localStorage.removeItem('kcg_resources');
      setRagState({});
      setTaskState({});
      setResourceState({});
    }
  };

  const daysPill = (ws) => {
    if (ws.daysLeft === null) return <span className="px-2 py-1 rounded text-xs font-bold bg-slate-100 text-slate-600">TBD</span>;
    if (ws.daysLeft <= 0) return <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">DUE</span>;
    if (ws.daysLeft <= 3) return <span className="px-2 py-1 rounded text-xs font-bold bg-amber-100 text-amber-700">{ws.daysLeft}d</span>;
    return <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">{ws.daysLeft}d</span>;
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-pink-100 text-pink-700';
      case 'High': return 'bg-purple-100 text-purple-700';
      case 'Medium': return 'bg-slate-100 text-slate-700';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Project Dashboard</h1>
          <p className="text-sm text-slate-600 mt-1">
            Period: {formatDateRange()} • {formatTodayLabel()}
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: healthColor }}></div>
          <span className="text-sm font-semibold text-slate-900">Health: {healthStatus}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => setEditPanelOpen(!editPanelOpen)}>
          ✏️ Edit
        </Button>
        <Button variant="outline" size="sm" onClick={resetAll}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
        <Button variant="outline" size="sm" onClick={() => window.print()}>
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-5 gap-4">
        <Card className="p-4 border-t-4 border-t-slate-900">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">Workstreams</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">5</p>
          <p className="text-xs text-slate-600 mt-1">All owned: Jess</p>
        </Card>
        <Card className="p-4 border-t-4 border-t-red-600">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">🔴 RED</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{counts.RED}</p>
          <p className="text-xs text-slate-600 mt-1">Needs attention</p>
        </Card>
        <Card className="p-4 border-t-4 border-t-amber-600">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">🟡 AMBER</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{counts.AMBER}</p>
          <p className="text-xs text-slate-600 mt-1">In progress</p>
        </Card>
        <Card className="p-4 border-t-4 border-t-green-600">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">🟢 GREEN</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{counts.GREEN}</p>
          <p className="text-xs text-slate-600 mt-1">On track</p>
        </Card>
        <Card className="p-4 border-t-4 border-t-teal-600">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">Tasks Done</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{taskCounts.done}</p>
          <p className="text-xs text-slate-600 mt-1">of {taskCounts.total || '—'}</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-4">RAG Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={ragChartData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                {ragChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
        <Card className="p-4 col-span-2">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-4">Days to Deadline</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart layout="vertical" data={deadlineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="id" type="category" />
              <Tooltip />
              <Bar dataKey="daysLeft" fill="#0d9488">
                {deadlineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Workstream Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide cursor-pointer hover:text-slate-900" onClick={() => sortTable(0)}>ID</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide cursor-pointer hover:text-slate-900" onClick={() => sortTable(1)}>Workstream</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide cursor-pointer hover:text-slate-900" onClick={() => sortTable(2)}>Phase</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide">Status</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide cursor-pointer hover:text-slate-900" onClick={() => sortTable(4)}>Priority</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide cursor-pointer hover:text-slate-900" onClick={() => sortTable(5)}>Deadline</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide cursor-pointer hover:text-slate-900" onClick={() => sortTable(6)}>Days Left</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wide">Next Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sortedWorkstreams.map(ws => (
                <tr key={ws.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-bold text-slate-900">{ws.id}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-slate-900">{ws.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{ws.phase}</td>
                  <td className="px-4 py-3">
                    <select
                      value={getRAG(ws.id)}
                      onChange={(e) => changeRAG(ws.id, e.target.value)}
                      className="text-sm rounded border-slate-300 font-semibold"
                    >
                      <option value="RED">🔴 RED</option>
                      <option value="AMBER">🟡 AMBER</option>
                      <option value="GREEN">🟢 GREEN</option>
                    </select>
                  </td>
                  <td className="px-4 py-3"><span className={`px-2 py-1 rounded text-xs font-semibold ${priorityColor(ws.priority)}`}>{ws.priority}</span></td>
                  <td className="px-4 py-3 text-sm text-slate-600">{ws.deadline}</td>
                  <td className="px-4 py-3">{daysPill(ws)}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 max-w-xs">{ws.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Resources Section */}
      <Card className="p-6">
        <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-4">Workstream Resources</h3>
        <div className="grid grid-cols-2 gap-4">
          {workstreams.map(ws => (
            <div key={ws.id} className="p-4 bg-slate-50 rounded-lg border-l-4 border-l-slate-900">
              <p className="text-sm font-bold text-slate-900 mb-3">{ws.id}</p>
              <div className="text-xs text-slate-500 italic">No resources yet</div>
              <Button variant="ghost" size="sm" className="mt-3 text-teal-600 hover:text-teal-700">
                <Plus className="w-4 h-4 mr-1" />
                Add resource
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
