import AgentCard from '@/components/AgentCard'
import SecurityScore from '@/components/SecurityScore'
import TeamMembers from '@/components/TeamMembers'
import SecurityEvents from '@/components/SecurityEvents'
import SecurityTrends from '@/components/SecurityTrends'
import QuickActions from '@/components/QuickActions'
import { initialAgents, teamMembers, securityEvents } from '@/lib/data'
import { Activity, AlertTriangle, Users } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Butterfly Security Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SecurityScore value={78} />
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm uppercase">Active Agents</p>
              <p className="text-3xl font-bold text-gray-800">
                {initialAgents.filter(agent => agent.status === 'active').length} / {initialAgents.length}
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-full p-3 shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm uppercase">Total Issues</p>
              <p className="text-3xl font-bold text-gray-800">
                {initialAgents.reduce((sum, agent) => sum + agent.issuesFound, 0)}
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-3 shadow-lg">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm uppercase">Team Members</p>
              <p className="text-3xl font-bold text-gray-800">{teamMembers.length}</p>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-full p-3 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SecurityTrends />
        </div>
        <TeamMembers members={teamMembers} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SecurityEvents events={securityEvents} />
        </div>
        <QuickActions />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {initialAgents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  )
}