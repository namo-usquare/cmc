"use client"
import React from 'react';
import { Star, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Button } from './ui/button';
import Image from 'next/image';



const CoinIcon = ({ name,icon }) => {
  return (
    <div className="w-6 h-6 mr-2 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
      <Image
        src={icon}
        alt={name}
        width={24}
        height={24}
      />
    </div>
  );
};


const MiniChart = ({ data, color }) => {
  return (
    <div className="w-20 h-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={color === 'green' ? '#1fffa3' : '#ff3a33'}
            strokeWidth={1.5}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const generateChartData = (trend = 'down') => {
  const data = [];
  let value = 100;
  
  for (let i = 0; i < 20; i++) {
    const randomChange = (Math.random() - 0.5) * 10;
    const trendInfluence = trend === 'down' ? -2 : 2;
    value += randomChange + trendInfluence;
    data.push({
      time: i,
      value: Math.max(20, value),
    });
  }
  
  return data;
};

const CryptocurrencyTable = () => {
  const cryptocurrencies = [
    {
      id: 1,
      name: "Kimba",
      ticker: "KIMBA",
      price: "$10703",
      change1h: "0.4%",
      change24h: "-0.2%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "red",
      chartData: generateChartData('down'),
      icon:'/image 1.png'
    },
    {
      id: 2,
      name: "Vodka",
      ticker: "VODKA",
      price: "$10703",
      change1h: "0.4%",
      change24h: "-0.2%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "red",
      chartData: generateChartData('down'),
            icon:'/image 2.png'

    },
    {
      id: 3,
      name: "Dogecoin",
      ticker: "DOGE",
      price: "$10703",
      change1h: "0.4%",
      change24h: "+0.3%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "green",
      chartData: generateChartData('up'),
            icon:'/Icon.png'

    },
    {
      id: 4,
      name: "Andy",
      ticker: "ANDY",
      price: "$10703",
      change1h: "0.4%",
      change24h: "+0.3%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "red",
      chartData: generateChartData('down'),
      icon:'/DOGE.png'
    },
    {
      id: 5,
      name: "Bitcoin",
      ticker: "BTC",
      price: "$10703",
      change1h: "0.4%",
      change24h: "-0.2%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "red",
      chartData: generateChartData('down'),
            icon:'/BTC.png'

    },
    {
      id: 6,
      name: "Pepe",
      ticker: "PEPE",
      price: "$10703",
      change1h: "0.4%",
      change24h: "-0.2%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "red",
      chartData: generateChartData('down'),
            icon:'/Icon (1).png'

    },
    {
      id: 7,
      name: "Shiba Inu",
      ticker: "SHIB",
      price: "$10703",
      change1h: "0.4%",
      change24h: "+0.3%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "green",
      chartData: generateChartData('up')
    },
    {
      id: 8,
      name: "Ethereum",
      ticker: "ETH",
      price: "$10703",
      change1h: "0.4%",
      change24h: "+0.3%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "green",
      chartData: generateChartData('up')
    },
    {
      id: 9,
      name: "USDC",
      ticker: "USDC",
      price: "$10703",
      change1h: "0.4%",
      change24h: "+0.3%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "green",
      chartData: generateChartData('up')
    },
    {
      id: 10,
      name: "Willy",
      ticker: "WILLY",
      price: "$10703",
      change1h: "0.4%",
      change24h: "-0.2%",
      change7d: "-3.8%",
      volume: "$34,916,853,570",
      marketCap: "$128,589,689,197",
      chartColor: "red",
      chartData: generateChartData('down')
    },
  ];

  return (
    <div className="bg-[#0a0b14] min-h-screen p-6">
      <div className="mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-[#919daf] text-xs border-b border-[#1a1c24]">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Coin</th>
                                <th className="px-4 py-3 text-right"></th>

                <th className="px-4 py-3 text-right">Price</th>
                <th className="px-4 py-3 text-right">1h</th>
                <th className="px-4 py-3 text-right">24h</th>
                <th className="px-4 py-3 text-right">7d</th>
                <th className="px-4 py-3 text-right">24h Volume</th>
                <th className="px-4 py-3 text-right">Market Cap</th>
                <th className="px-4 py-3 text-right">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {cryptocurrencies.map((coin) => (
                <tr
                  key={coin.id}
                  className="border-b border-[#1a1c24] hover:bg-[#0e0e20] text-white"
                >
                  <td className="px-4 py-4 text-left">
                    <div className="flex items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto mr-2 hover:bg-transparent"
                      >
                        <Star className="h-4 w-4 text-gray-400 hover:text-yellow-400" />
                      </Button>
                      <span className="text-[#919daf]">{coin.id}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-left">
                    <div className="flex items-center">
                      <CoinIcon name={coin.name} icon={coin.icon} />
                      <div className='flex items-center gap-2'>
                        <div className="font-medium">{coin.name}</div>
                        <div className="text-xs text-[#919daf]">
                          {coin.ticker}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">

                    <Button
                      size="sm"
                      className="bg-transparent border border-green-500 text-green-500 hover:bg-[#1fffa3]/80  text-xs rounded-full h-6 px-3 mt-1 font-medium"
                    >
                      BUY
                    </Button>
                    </td>
                  <td className="px-4 py-4 text-right">
                    <div className="font-medium">{coin.price}</div>
                  
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span className="text-[#ff3a33] flex items-center justify-end">
                      <ArrowDown className="inline h-3 w-3 mr-1" />
                      {coin.change1h}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span
                      className={`flex items-center justify-end ${
                        coin.change24h.includes("+")
                          ? "text-[#1fffa3]"
                          : "text-[#ff3a33]"
                      }`}
                    >
                      {coin.change24h.includes("+") ? (
                        <ArrowUp className="inline h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDown className="inline h-3 w-3 mr-1" />
                      )}
                      {coin.change24h.replace("+", "").replace("-", "")}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span className="text-[#ff3a33] flex items-center justify-end">
                      <ArrowDown className="inline h-3 w-3 mr-1" />
                      {coin.change7d.replace("+", "").replace("-", "")}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-[#919daf]">
                    {coin.volume}
                  </td>
                  <td className="px-4 py-4 text-right text-[#919daf]">
                    {coin.marketCap}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-end">
                      <MiniChart 
                        data={coin.chartData} 
                        color={coin.chartColor} 
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptocurrencyTable;