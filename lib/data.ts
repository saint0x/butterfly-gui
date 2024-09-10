export interface Agent {
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
  
  export const initialAgents: Agent[] = [
    { id: '1', name: 'Security Scanner', description: 'Scans for security vulnerabilities', iconName: 'Shield', color: '#4A90E2', status: 'active', lastScan: '2023-06-15T10:30:00Z', issuesFound: 3, trend: 'down' },
    { id: '2', name: 'Code Quality Checker', description: 'Analyzes code quality and style', iconName: 'Code', color: '#5A9EEE', status: 'active', lastScan: '2023-06-14T14:45:00Z', issuesFound: 7, trend: 'up' },
    { id: '3', name: 'Performance Analyzer', description: 'Checks for performance issues', iconName: 'Zap', color: '#3B7DD8', status: 'inactive', lastScan: '2023-06-13T09:15:00Z', issuesFound: 2, trend: 'stable' },
    { id: '4', name: 'Dependency Auditor', description: 'Audits project dependencies', iconName: 'Package', color: '#6AADF4', status: 'active', lastScan: '2023-06-12T16:20:00Z', issuesFound: 5, trend: 'down' },
  ]
  
  export const teamMembers: TeamMember[] = [
    { id: '1', name: 'Alice Johnson', role: 'Security Lead', avatar: '/placeholder.svg?height=40&width=40' },
    { id: '2', name: 'Bob Smith', role: 'Developer', avatar: '/placeholder.svg?height=40&width=40' },
    { id: '3', name: 'Charlie Brown', role: 'QA Specialist', avatar: '/placeholder.svg?height=40&width=40' },
    { id: '4', name: 'Diana Prince', role: 'Project Manager', avatar: '/placeholder.svg?height=40&width=40' },
  ]
  
  export const securityEvents: SecurityEvent[] = [
    { id: '1', type: 'critical', description: 'Unauthorized access attempt detected', timestamp: '2023-06-15T08:30:00Z' },
    { id: '2', type: 'warning', description: 'Outdated dependency found in main project', timestamp: '2023-06-14T11:45:00Z' },
    { id: '3', type: 'info', description: 'Security scan completed successfully', timestamp: '2023-06-13T16:20:00Z' },
    { id: '4', type: 'critical', description: 'Potential SQL injection vulnerability identified', timestamp: '2023-06-12T09:10:00Z' },
  ]