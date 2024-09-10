export default function SecurityTrends() {
    return (
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Trends</h3>
        <div className="h-48 flex items-end justify-between">
          {[40, 60, 30, 70, 50, 80, 45].map((value, index) => (
            <div key={index} className="w-8 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t" style={{ height: `${value}%` }}></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-gray-500 text-sm">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    )
  }