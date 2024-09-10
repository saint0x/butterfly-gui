import { Shield } from 'lucide-react'

interface SecurityScoreProps {
  value: number
}

export default function SecurityScore({ value }: SecurityScoreProps) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm uppercase">Security Score</p>
          <p className="text-3xl font-bold text-gray-800">{value}%</p>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-full p-3 shadow-lg">
          <Shield className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" 
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}