"use client"

import { Search, Settings, Star, BarChart3, Grid, Menu, QrCode, Briefcase, Star as StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import clipImage from '@/public/clip.png';


/**
 * Navbar component for Ultron Marketcap
 * Displays logo, navigation links, search, and user actions
 */
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-black border-b border-gray-800">
      {/* Logo and Brand */}
      <div className="flex items-center gap-0.5 min-w-max">
        <div className="flex items-center justify-center">
          <Image src={clipImage} alt="logo}"/>
        </div>
        <span className="text-xl font-semibold text-white">Ultron</span>
        <span className="text-xl font-semibold text-green-400 ">Marketcap</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-4 mx-8">
        {/* Navigation links */}
        <a href="#" className="text-white hover:text-green-400 transition-colors">Cryptocurrencies</a>
        <a href="#" className="text-white hover:text-green-400 transition-colors">Exchanges</a>
        <a href="#" className="text-white hover:text-green-400 transition-colors">NFT</a>
        <a href="#" className="text-white hover:text-green-400 transition-colors">Information</a>
        <a href="#" className="text-white hover:text-green-400 transition-colors">Launchpad</a>
      </div>

      {/* Right Actions */}
      <div className="lg:flex hidden  items-center gap-2 min-w-max">
        {/* Portfolio Button */}
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-300 hover:text-white px-2">
          <Briefcase className="w-4 h-4" />
          <span className="text-sm">Portfolio</span>
        </Button>
        {/* Watchlist Button */}
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-300 hover:text-white px-2">
          <StarIcon className="w-4 h-4" />
          <span className="text-sm">Watchlist</span>
        </Button>
        {/* Search Bar */}
        <div className="relative hidden lg:block mx-2 ">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 rounded-lg" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1.5 w-full bg-black  border border-gray-600 text-white placeholder:text-gray-400 rounded-lg focus:bg-gray-800 focus:border-green-400 focus:ring-1 focus:ring-green-500"
          />
        </div>
        {/* QR Code Icon */}
        <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 border rounded-lg border-gray-600 hover:text-white hover:bg-gray-800">
          <QrCode className="w-5 h-5" />
          <span className="sr-only">QR Code</span>
        </Button>
        {/* Login Button */}
        <Button className="bg-gradient-to-r rounded-lg from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 text-white px-6 py-2 font-medium flex items-center gap-2 shadow-md">
          LOG IN
        </Button>
        {/* Hamburger Menu Icon */}
        <Button variant="ghost" size="icon" className="w-9 h-9 hidden lg:flex justify-center text-gray-400 border-gray-600 border rounded-lg hover:text-white hover:bg-gray-800 ml-1">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
          {/* Hamburger Menu Icon */}
        <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 lg:hidden flex justify-center border-gray-600 border rounded-lg hover:text-white hover:bg-gray-800 ml-1">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Menu</span>
        </Button>
    </nav>
  )
}
