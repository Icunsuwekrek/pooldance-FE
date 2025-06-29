export default function SkeletonDashboard() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-200 rounded w-64" />
        <div className="space-y-2 text-right">
          <div className="h-5 bg-gray-200 rounded w-32" />
          <div className="h-4 bg-gray-100 rounded w-40" />
        </div>
      </div>

      <div className="h-24 bg-gray-100 rounded-xl" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="h-60 bg-gray-100 rounded-xl" />
        <div className="lg:col-span-2 h-60 bg-gray-100 rounded-xl" />
      </div>

      <div className="h-40 bg-gray-100 rounded-xl" />
    </div>
  )
}
