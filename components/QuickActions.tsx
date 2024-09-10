export default function QuickActions() {
    return (
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg py-2 px-4 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Run Full Scan
          </button>
          <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg py-2 px-4 hover:from-green-500 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Update Dependencies
          </button>
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg py-2 px-4 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Reports
          </button>
        </div>
      </div>
    )
  }