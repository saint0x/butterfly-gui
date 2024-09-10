import { AlertTriangle, CheckCircle } from 'lucide-react'

interface SecurityEvent {
  id: string
  type: 'critical' | 'warning' | 'info'
  description: string
  timestamp: string
}

interface SecurityEventsProps {
  events: SecurityEvent[]
}

export default function SecurityEvents({ events }: SecurityEventsProps) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Security Events</h3>
      <ul className="space-y-3">
        {events.map((event: SecurityEvent) => (
          <li key={event.id} className="flex items-center">
            {event.type === 'critical' && <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />}
            {event.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />}
            {event.type === 'info' && <CheckCircle className="w-5 h-5 text-green-500 mr-2" />}
            <div>
              <p className="text-gray-800">{event.description}</p>
              <p className="text-gray-500 text-sm">{new Date(event.timestamp).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}