"use client"

import Image from "next/image"
import DashboardImage from "@/assets/images/admin/dashboard.png"
import { useEffect, useState } from "react"
import SkeletonDashboard from "@/components/loading/SkeletonDashboard"
import { Line } from "react-chartjs-2"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

ChartJS.register(BarElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

export default function AdminDashboardPage() {
  const [currentDate, setCurrentDate] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  const [loading, setLoading] = useState(true)
  const [selectedMonth, setSelectedMonth] = useState("July")

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

      const weekday = days[now.getDay()]
      const day = now.getDate()
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      setCurrentDate(`${weekday}, ${day} ${month} ${year}`)

      const timeString = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
      setCurrentTime(timeString)
    }

    updateDateTime()  
    const interval = setInterval(updateDateTime, 1000)
    const timeout = setTimeout(() => setLoading(false), 1500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

const classData = {
  labels: ["Expert", "Middle", "Beginner"],
  datasets: [
    {
      label: "Active",
      data: [18, 15, 6],
      backgroundColor: "#9333ea",
      borderRadius: 6,
      barPercentage: 0.5,
    },
    {
      label: "Total",
      data: [20, 18, 20],
      backgroundColor: "#e9d5ff",
      borderRadius: 6,
      barPercentage: 0.5,
    }
  ]
}

const classOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        boxWidth: 12,
        color: "#6b7280",
        font: {
          size: 12
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5,
        color: "#6b7280",
        font: { size: 12 }
      },
      grid: {
        drawBorder: false
      }
    },
    x: {
      ticks: {
        color: "#6b7280",
        font: { size: 12 }
      },
      grid: {
        display: false
      }
    }
  }
}

  const topUsers = [
    { name: "Alice Johnson", type: "Premium", total: 320 },
    { name: "Bob Smith", type: "Standard", total: 280 },
    { name: "Charlie Brown", type: "Premium", total: 250 },
    { name: "Diana Prince", type: "Standard", total: 220 },
  ]

  if (loading) return <SkeletonDashboard />

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Admin</h1>
        <div className="flex flex-col items-end text-purple-600">
          <span className="text-xl font-semibold animate-pulse">{currentTime}</span>
          <span className="mt-1 text-sm text-gray-500">{currentDate}</span>
        </div>
      </div>

<div className="w-full min-h-[180px] bg-gradient-to-r from-purple-100 via-white to-purple-50 rounded-xl border border-purple-200 shadow-sm p-6 flex items-center justify-between overflow-hidden">
  {/* Teks sebelah kiri */}
  <p className="z-10 text-lg font-semibold text-gray-700">
    Hi, <span className="text-purple-700">Davina Irsanti</span>,<br />
    ready to start your day with some pitch decks?
  </p>

  {/* Gambar di kanan */}
  <div className="w-[160px] h-[120px] relative">
    <Image
      src={DashboardImage}
      alt="Dashboard Illustration"
      fill
      className="object-contain object-right"
    />
  </div>
</div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
<div className="p-6 bg-white border shadow-sm rounded-xl">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold text-gray-700">Class</h2>
    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
      <SelectTrigger className="w-[120px] border border-purple-300 focus:ring-2 focus:ring-purple-500 rounded-md text-sm shadow-sm">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        {months.map((month) => (
          <SelectItem key={month} value={month}>
            {month}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
  <Bar data={classData} options={classOptions} />
</div>

        <div className="lg:col-span-2">
          <div className="p-6 bg-white border shadow-sm rounded-xl">
            <h2 className="mb-4 text-lg font-semibold text-gray-700">Statistics</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <DashboardCard title="Total Users" value="1,250" />
              <DashboardCard title="New Signups" value="120" />
              <DashboardCard title="Revenue" value="$7,500" />
            </div>
          </div>
        </div>
      </div>

            <div className="p-6 bg-white border shadow-sm rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Top Users</h2>
         <div className="relative w-48">

  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
  <SelectTrigger className="w-[200px] border border-purple-300 focus:ring-2 focus:ring-purple-500 rounded-md text-sm shadow-sm">
    <SelectValue placeholder="Select month" />
  </SelectTrigger>
  <SelectContent>
    {months.map((month) => (
      <SelectItem key={month} value={month}>
        {month}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

  {/* Icon dropdown */}
</div>

        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topUsers.map((user, index) => (
                <tr key={index} className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.type}</td>
                  <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{user.total}</td>
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
      <h2 className="mb-1 text-sm text-gray-500">{title}</h2>
      <p className="text-2xl font-bold text-purple-700">{value}</p>
    </div>
  )
}
