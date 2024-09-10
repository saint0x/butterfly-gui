'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Agent {
  id: string
  name: string
  description: string
  iconName: string
  color: string
  status: 'active' | 'inactive'
  lastScan: string
  issuesFound: number
  trend: 'up' | 'down' | 'stable'
}

interface AgentCardProps {
  agent: Agent
}

const iconMap: { [key: string]: LucideIcon } = {
  Shield: ChevronUp,
  Code: ChevronDown,
  Zap: ChevronUp,
  Package: ChevronDown,
  // Add more mappings as needed
}

export default function AgentCard({ agent }: AgentCardProps) {
  const [status, setStatus] = useState<'active' | 'inactive'>(agent.status)
  const Icon = iconMap[agent.iconName] || ChevronUp // Fallback to ChevronUp if icon not found

  const handleStatusChange = (newStatus: 'active' | 'inactive') => {
    setStatus(newStatus)
    // Here you would typically call an API to update the agent's status
  }

  return (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Icon className="w-8 h-8 mr-3" style={{ color: agent.color }} />
          <h3 className="text-lg font-semibold text-gray-800">{agent.name}</h3>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={status === 'active'}
            onChange={(e) => handleStatusChange(e.target.checked ? 'active' : 'inactive')}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500"></div>
        </label>
      </div>
      <p className="text-gray-600 mb-4">{agent.description}</p>
      <div className="text-sm text-gray-500">
        <p>Last scan: {new Date(agent.lastScan).toLocaleString()}</p>
        <p>Issues found: {agent.issuesFound}</p>
        <p className="flex items-center mt-2">
          Trend: 
          {agent.trend === 'up' && <ChevronUp className="text-red-500 ml-1" />}
          {agent.trend === 'down' && <ChevronDown className="text-green-500 ml-1" />}
          {agent.trend === 'stable' && <span className="text-yellow-500 ml-1">→</span>}
        </p>
      </div>
    </div>
  )
}