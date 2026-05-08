"use client";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const COULEURS_PIE = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

export default function StatsCharts({ stats }: { stats: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-4">Statistiques par mois</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={stats.parMois}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#E65100" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-4">Répartition par région</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={stats.parRegion}
              dataKey="total"
              nameKey="region"
              cx="50%" cy="50%"
              outerRadius={90}
              label
            >
              {stats.parRegion.map((entry: any, i: number) => (
                <Cell key={i} fill={COULEURS_PIE[i % COULEURS_PIE.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}