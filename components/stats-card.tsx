"use client";

import { ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const CryptoStatsCards = () => {
  // Generate sample chart data
  const generateChartData = (trend = "down", points = 30) => {
    const data = [];
    let value = 100;

    for (let i = 0; i < points; i++) {
      const randomChange = (Math.random() - 0.5) * 8;
      const trendInfluence = trend === "down" ? -1.5 : 1.5;
      value += randomChange + trendInfluence;
      data.push({
        time: i,
        value: Math.max(20, value),
      });
    }

    return data;
  };

  const generateUpwardData = (points = 30) => {
    const data = [];
    let value = 60;

    for (let i = 0; i < points; i++) {
      const randomChange = (Math.random() - 0.3) * 6;
      value += randomChange + 1;
      data.push({
        time: i,
        value: Math.max(20, value),
      });
    }

    return data;
  };

  const [marketCapData, setMarketCapData] = useState(generateChartData("down"));
  const [volumeData, setVolumeData] = useState(generateChartData("down"));

  // Update charts periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketCapData(generateChartData("down"));
      setVolumeData(generateChartData("down"));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="mb-4">
        {/* Main Stats Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Market Cap Card */}
          <div className="flex flex-col gap-2">
            <div className="lg:col-span-2 bg-[#0E0E2066] border border-gray-800 shadow-lg rounded-2xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-3xl font-bold mb-1">
                    $3,511,092,194,757
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-400">Market Cap</span>
                    <span className="ml-2 text-red-400 flex items-center">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      2.1%
                    </span>
                  </div>
                </div>
                <div className="w-32 h-16 ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={marketCapData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#ff4757"
                        strokeWidth={2}
                        dot={false}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Trading Volume Card */}
            <div className="lg:col-span-2 bg-[#0E0E2066] border border-gray-800 shadow-lg rounded-2xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="text-3xl font-bold mb-1">
                    $125,001,647,978
                  </div>
                  <div className="text-sm text-gray-400">
                    24h Trading Volume
                  </div>
                </div>
                <div className="w-32 h-16 ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={volumeData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#ff4757"
                        strokeWidth={2}
                        dot={false}
                        activeDot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Card */}
          <div className="bg-[#0E0E2066] rounded-2xl p-6 border border-gray-800 shadow-lg text-white">
            <div className="flex items-center mb-4">
              <span className="text-xl mr-2">🔥</span>
              <h3 className="text-lg font-semibold">Trending</h3>
              <span className="ml-auto text-sm text-blue-400">View more</span>
              <span className="text-gray-400 mt-1"><ChevronRight size={17} /></span>
            </div>
            <div className="space-y-4 px-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0f3460] rounded-full flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Darty Protocol</span>
                </div>
                <div className="text-right flex gap-1 items-center">
                  <div className="text-sm font-semibold">$0.001793</div>
                  <div className="text-green-400 text-xs">↑ 18.7%</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#2d5a87] rounded-full flex items-center justify-center mr-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm">Meridian</span>
                </div>
                <div className="text-right flex gap-1 items-center">
                  <div className="text-sm font-semibold">$31.81</div>
                  <div className="text-red-400 text-xs">↓ 7.2%</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#4a90e2] rounded-full flex items-center justify-between mr-3 px-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Synthex</span>
                </div>
                <div className="text-right flex items-center gap-1">
                  <div className="text-sm font-semibold">$0.06142</div>
                  <div className="text-red-400 text-xs">↓ 12.6%</div>
                </div>
              </div>
            </div>
          </div>

         
            {/* Top Gainers Card */}
            <div className="lg:col-span-1 bg-[#0E0E2066] rounded-2xl border border-gray-800 shadow-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <span className="text-xl mr-2">🚀</span>
                <h3 className="text-lg font-semibold">Top Gainers</h3>
              </div>
              <div className="space-y-4 px-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#2d5a87] rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="text-sm">ApeX</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">$0.006954</div>
                    <div className="text-green-400 text-xs">↑ 39.2%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#0f3460] rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm">Equilibrium</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">$63.98</div>
                    <div className="text-green-400 text-xs">↑ 34.1%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#4a90e2] rounded-full flex items-center justify-center mr-3">
                      <div className="w-6 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">Enjin</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">$0.005677</div>
                    <div className="text-green-400 text-xs">↑ 27.6%</div>
                  </div>
                </div>
              </div>
            </div>

           
        </div>
      </div>
  );
};

export default CryptoStatsCards;
