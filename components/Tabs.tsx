import React from 'react';
import { Star, Zap, Folder } from 'lucide-react';

const NavigationTabs = () => {
  return (
    <div className="flex flex-wrap gap-2 ">
      <button className="flex items-center px-4 py-1.5 border bg-transparent text-[#1fffa3] border-[#1fffa3] rounded-full text-sm font-medium hover:bg-[#22faa5] transition-colors">
        <span className="text-xs mr-2">📊</span>
        <span>ALL</span>
      </button>
      
      <button className="flex items-center px-4 py-1.5 border border-[#364155] text-[#919daf] rounded-full text-sm hover:text-white hover:border-[#4a5568] transition-colors">
        <Star className="w-4 h-4 mr-2" />
        <span>Highlights</span>
      </button>
      
      <button className="flex items-center px-4 py-1.5 border border-[#364155] text-[#919daf] rounded-full text-sm hover:text-white hover:border-[#4a5568] transition-colors">
        <Zap className="w-4 h-4 mr-2" />
        <span>Pump.fun</span>
      </button>
      
      <button className="flex items-center px-4 py-1.5 border border-[#364155] text-[#919daf] rounded-full text-sm hover:text-white hover:border-[#4a5568] transition-colors">
        <Folder className="w-4 h-4 mr-2" />
        <span>Categories</span>
      </button>
      
      <button className="flex items-center px-4 py-1.5 border border-[#364155] text-[#919daf] rounded-full text-sm hover:text-white hover:border-[#4a5568] transition-colors">
        <span className="text-xs mr-2">🔥</span>
        <span>Wallets</span>
      </button>
      
      <button className="flex items-center px-4 py-1.5 border border-[#364155] text-[#919daf] rounded-full text-sm hover:text-white hover:border-[#4a5568] transition-colors">
        <span className="text-xs mr-2">🔥</span>
        <span>Polkadot Ecosystem</span>
      </button>
      
      <button className="flex items-center px-4 py-1.5 border border-[#364155] text-[#919daf] rounded-full text-sm hover:text-white hover:border-[#4a5568] transition-colors">
        <span className="text-xs mr-2">🔥</span>
        <span>Bridged-Tokens</span>
      </button>
      
      <button className="flex items-center px-4 py-1.5 border border-[#364155] text-[#919daf] rounded-full text-sm hover:text-white hover:border-[#4a5568] transition-colors">
        <span className="text-xs mr-2">🔥</span>
        <span>Bittensor Ecosystem</span>
      </button>
    </div>
  );
};

export default NavigationTabs;