import { LucideIcon } from 'lucide-react'

export interface Agent {
  id: string
  name: string
  description: string
  icon: LucideIcon
  color: string
  status: 'active' | 'inactive'
  lastScan: string
  issuesFound: number
  trend: 'up' | 'down' | 'stable'
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
}

export interface SecurityEvent {
  id: string
  type: 'critical' | 'warning' | 'info'
  description: string
  timestamp: string
}

export interface AgentCardProps {
  agent: Agent
}

export interface SecurityScoreProps {
  value: number
}

export interface TeamMembersProps {
  members: TeamMember[]
}

export interface SecurityEventsProps {
  events: SecurityEvent[]
}

export interface QuickActionsProps {
  onRunFullScan: () => void
  onUpdateDependencies: () => void
  onViewReports: () => void
}

export interface DashboardStats {
  securityScore: number
  activeAgents: number
  totalAgents: number
  totalIssues: number
  teamMemberCount: number
}

export interface DashboardPageProps {
  agents: Agent[]
  teamMembers: TeamMember[]
  securityEvents: SecurityEvent[]
  stats: DashboardStats
}