"use client"

import { Search, Settings, Star, BarChart3, Grid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg">
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-semibold text-teal-400">Marketcap</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 rounded-lg focus:bg-gray-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Settings Icon */}
        <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-gray-800">
          <Settings className="w-5 h-5" />
          <span className="sr-only">Settings</span>
        </Button>

        {/* Star/Favorites Icon */}
        <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-gray-800">
          <Star className="w-5 h-5" />
          <span className="sr-only">Favorites</span>
        </Button>

        {/* Login Button */}
        <Button className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2">
          <Grid className="w-4 h-4" />
          LOG IN
        </Button>
      </div>
    </nav>
  )
}
