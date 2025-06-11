import Image from "next/image";
import { Search, ChevronRight, Star, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/navbar";
import CryptoStatsCards from "@/components/stats-card";
import CryptocurrencyTable from "@/components/crypto-table";
import NavigationTabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090B10] text-white">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto px-5 lg:px-10 py-10">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-1">
            <span className="bg-gradient-to-r from-[#1FFFA3] to-[#8C47F5] bg-clip-text text-transparent">
              <span className="">Coins</span> Prices by{" "}
              <span className="">Market Cap</span>
            </span>
          </h1>

          <p className="text-gray-400 tracking-[0.05rem] mb-4">
            The global cryptocurrency market cap today is $3.51 Trillion.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-[#919daf]">
            <div className="flex items-center">
              <div className="w-2 h-2  rounded-full bg-[#1fffa3] mr-1"></div>
              <span>
                28,779,922
                <span className="text-purple-500 ms-1">Blocks Generated</span>
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#3bb5ff] mr-1"></div>
              <span>
                90,462
                <span className="text-blue-400 ms-1">Unique Wallets</span>
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#de91f2] mr-1"></div>
              <span>
                3,018,305
                <span className="text-green-400 ms-1"> Transactions</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <CryptoStatsCards />

        <div className=" flex justify-between items-center mb-4 mt-[3rem!important]">
          <NavigationTabs />
          <button className="bg-[#4A4B5E] py-1.5 px-5 text-sm rounded-full">
            Customize
          </button>
        </div>
        {/* Cryptocurrency Table */}
        <CryptocurrencyTable />

        {/* Banner */}
        <div className="my-8 bg-gradient-to-r from-[#ffcc33] to-[#ffd700] rounded-lg overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8">
            {/* Left Content */}
            <div className="flex-1 max-w-md space-y-4">
              <h2 className="text-3xl font-bold text-black leading-tight">
                $uANDY is the official unofficial token of the modern meme
                economy.
              </h2>
              <p className="text-base text-black/70">
                The Meme is Alive. $uANDY is the First Meme Coin on Ultron
                Chain.
              </p>
              <button className="bg-gradient-to-r from-[#00ff88] to-[#6b46c1] hover:opacity-90 text-white font-semibold px-10 py-2 rounded-full transition-opacity">
                Buy Now
              </button>
            </div>

            {/* Right Content - Images */}
            <div className="flex items-center relative">
              {/* Large "glon" logo/text image */}
              <img
                src="/Andy Logo 1.png"
                alt="Glon Logo"
                className="w-auto h-[35vh] mr-[10rem] opacity-80"
              />

              {/* Character on whale image */}
              <img
                src="/AndyWhale 1.png"
                alt="$uANDY Character on Whale"
                className="w-auto h-[44vh] absolute right-0  ml-4"
              />
            </div>
          </div>
        </div>

        {/* Featured Coins */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Featured Coins</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                name: "Kimba",
                ticker: "KIMBA",
                icon: "/image 1.png",
                image: "/Cover (3).png",
              },
              {
                name: "Vodka",
                ticker: "VODKA",
                icon: "/image 2.png",
                image: "/Cover (4).png",
              },
              {
                name: "Dogecoin",
                ticker: "DOGE",
                icon: "/image 6.png",
                image: "/image 6.png",
              },
              {
                name: "Pepe",
                ticker: "PEPE",
                icon: "/Icon (1).png",
                image: "/Cover (5).png",
              },
              {
                name: "WIF",
                ticker: "WIF",
                icon: "/Cover (2).png",
                image: "/Cover (2).png",
              },
            ].map((coin, index) => (
              <div
                key={index}
                className="bg-[#0e0e20] rounded-lg overflow-hidden"
              >
                <div className="h-32 relative">
                  <img
                    src={coin.image}
                    alt={`${coin.name} background`}
                    className="h-auto w-auto "
                  />
                  <div className="absolute bottom-0 left-10 transform -translate-x-1/2 translate-y-1/2 bg-[#0e0e20] rounded-full p-1">
                    <Image
                      src={coin.icon || "/placeholder.svg"}
                      alt={coin.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="p-4 pt-8 text-start">
                  <div className="text-xs text-[#919daf] mb-1">
                    {coin.ticker}
                  </div>
                  <h3 className="font-bold mb-2">{coin.name}</h3>
                  <p className="text-xs text-[#919daf] mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-[#3bb5ff] hover:text-[#86c3ff] p-0 h-auto"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0d1421] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <Image
                  src="/clip.png"
                  alt="Ultron Logo"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="font-bold text-3xl">
                  Ultron <span className="text-[#1fffa3]">Hub</span>
                </span>
              </div>
              <p className="text-sm text-[#919daf]">
                Your Web3 Accelerator | Est. 2025
              </p>
            </div>
            <div className="flex flex-col items-end space-y-0 min-w-[380px]">
              {/* Email Row */}
              <div className="flex items-center justify-between w-full py-3 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span className="text-sm text-white">Email</span>
                </div>
                <span className="text-sm text-[#919daf]">@</span>
                <span className="text-sm text-[#919daf]">
                  contact@ultronhub.io
                </span>
              </div>

              {/* Ultron Foundation Row */}
              <div className="flex items-center justify-between w-full py-3 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <span className="text-sm text-white">Ultron Foundation</span>
                </div>
                <span className="text-sm text-[#919daf]">@</span>
                <span className="text-sm text-[#919daf]">
                  ultron.foundation
                </span>
              </div>

              {/* Whitepaper Row */}
              <div className="flex items-center justify-between w-full py-3 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h8v8H4V6z"
                    ></path>
                  </svg>
                  <span className="text-sm text-white">Whitepaper</span>
                </div>
                <span className="text-sm text-[#919daf]">→</span>
                <span className="text-sm text-[#919daf]">Coming Soon</span>
              </div>

              {/* Twitter Row */}
              <div className="flex items-center justify-between w-full py-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span className="text-sm text-white">Twitter</span>
                </div>
                <span className="text-sm text-[#919daf]">→</span>
                <span className="text-sm text-[#919daf]">@ultron_found</span>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-[#919daf]">
            © 2025 Ultron Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
