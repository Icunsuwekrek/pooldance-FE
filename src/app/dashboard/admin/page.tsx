"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function AdminDashboardPage() {
  const [currentDate, setCurrentDate] = useState("")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()

      const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
      const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

      const weekday = days[now.getDay()]
      const day = now.getDate()
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      setCurrentDate(`${weekday}, ${day} ${month} ${year}`)

      const timeString = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setCurrentTime(timeString)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [120, 190, 300, 250, 280, 320, 400],
        borderColor: "#9333ea",
        backgroundColor: "#e9d5ff",
        tension: 0.4,
        fill: true,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  const topUsers = [
    { name: "Alice Johnson", type: "Premium", total: 320 },
    { name: "Bob Smith", type: "Standard", total: 280 },
    { name: "Charlie Brown", type: "Premium", total: 250 },
    { name: "Diana Prince", type: "Standard", total: 220 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Admin</h1>
        <div className="flex flex-col items-end text-purple-600">
          <span className="text-xl font-semibold animate-pulse">{currentTime}</span>
          <span className="text-sm text-gray-500 mt-1">{currentDate}</span>
        </div>
      </div>

      <div className="w-full min-h-[180px] bg-gradient-to-r from-purple-100 via-white to-purple-50 rounded-xl border border-purple-200 shadow-sm p-6 flex items-center">
        <p className="text-lg font-semibold text-gray-700">
          Hi, <span className="text-purple-700">Davina Irsanti</span>,<br />
          ready to start your day with some pitch decks?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ChartJS Diagram */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Visitor Chart</h2>
          <Line data={data} options={options} />
        </div>

        {/* Stats */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <DashboardCard title="Total Users" value="1,250" />
              <DashboardCard title="New Signups" value="120" />
              <DashboardCard title="Revenue" value="$7,500" />
            </div>
          </div>
        </div>
      </div>

      {/* Top Users Table */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Top Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topUsers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{user.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function DashboardCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="min-h-[200px] bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
      <h2 className="text-sm text-gray-500 mb-1">{title}</h2>
      <p className="text-2xl font-bold text-purple-700">{value}</p>
    </div>
  )
}
