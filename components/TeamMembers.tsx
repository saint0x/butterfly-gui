interface TeamMember {
    id: string
    name: string
    role: string
    avatar: string
  }
  
  interface TeamMembersProps {
    members: TeamMember[]
  }
  
  export default function TeamMembers({ members }: TeamMembersProps) {
    return (
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Team Members</h3>
        <ul className="space-y-3">
          {members.map((member: TeamMember) => (
            <li key={member.id} className="flex items-center">
              <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="text-gray-800 font-medium">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }