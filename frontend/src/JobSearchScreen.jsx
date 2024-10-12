import { Bell, Menu, Search } from "lucide-react"

export default function JobSearchScreen() {
  return (
    <div className="bg-[#1C1C23] text-white min-h-screen p-6 max-w-md mx-auto">
      <header className="flex justify-between items-center mb-6">
        <Menu className="w-6 h-6" />
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6" />
          <img src="/images/woman.png" alt="User avatar" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for freelancers, gigs, etc.."
          className="w-full bg-[#2C2C35] text-white placeholder-gray-400 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">For you</h2>
          <a href="#" className="text-sm text-gray-400">See All</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#4A3AFF] p-4 rounded-xl">
            <img src="/images/apple.png" alt="Apple logo" className="w-8 h-8 mb-2" />
            <h3 className="font-semibold text-sm mb-1">Apple</h3>
            <p className="text-xs text-gray-200 mb-2">Mumbai, India</p>
            <h4 className="font-bold text-sm mb-1">Sales Manager</h4>
            <p className="font-bold text-sm mb-2">$80K / Project</p>
            <div className="flex justify-between items-center">
              <span className="bg-[#5D4FFF] text-xs px-2 py-1 rounded-full">Full Time</span>
              <span className="text-xs text-gray-300">2 days ago</span>
            </div>
          </div>
          <div className="bg-[#2C2C35] p-4 rounded-xl">
            <img src="/images/google.png" alt="Google logo" className="w-8 h-8 mb-2" />
            <h3 className="font-semibold text-sm mb-1">Google</h3>
            <p className="text-xs text-gray-400 mb-2">Bangalore, In</p>
            <h4 className="font-bold text-sm mb-1">Project Assissta</h4>
            <p className="font-bold text-sm mb-2">$20K / Hour</p>
            <div className="flex justify-between items-center">
              <span className="bg-[#3C3C45] text-xs px-2 py-1 rounded-full">Full Time</span>
              <span className="text-xs text-gray-400">2 days ago</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recommended Jobs</h2>
          <a href="#" className="text-sm text-gray-400">See All</a>
        </div>
        <div className="space-y-4">
          <div className="bg-[#2C2C35] p-4 rounded-xl flex items-center">
            <img src="/images/google.png" alt="Google logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="font-semibold">Sales Manager</h3>
              <p className="text-sm text-gray-400">Google | $80K / Project</p>
              <div className="flex space-x-2 mt-1">
                <span className="bg-[#3C3C45] text-xs px-2 py-1 rounded-full">Experience: 5+ Years</span>
                <span className="bg-[#3C3C45] text-xs px-2 py-1 rounded-full">Full Time</span>
              </div>
            </div>
          </div>
          <div className="bg-[#2C2C35] p-4 rounded-xl flex items-center">
            <img src="/images/apple.png" alt="Apple logo" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="font-semibold">Project Manager</h3>
              <p className="text-sm text-gray-400">Apple | $56K / Project</p>
              <div className="flex space-x-2 mt-1">
                <span className="bg-[#3C3C45] text-xs px-2 py-1 rounded-full">Experience: 5+ Years</span>
                <span className="bg-[#3C3C45] text-xs px-2 py-1 rounded-full">Full Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}