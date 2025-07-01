const Header = () => {
  return (
    <header className="flex flex-col gap-3 md:flex-row justify-between items-center p-4 bg-white shadow-lg pl-0 md:pl-64 sticky top-0 z-40 transition-all duration-300 w-full">
      <div className="flex flex-col w-full md:flex-row md:w-auto gap-2 md:gap-4 items-center ml-[20px] md:ml-9">
        {/* Toggle button for mobile view (example, replace with your actual toggle if needed) */}
        <button className="md:hidden mb-2 self-start p-2 rounded bg-blue-100 text-blue-700 font-bold">☰</button>
        <input
          type="text"
          placeholder="Search..."
          className="border border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 px-4 py-2 rounded-lg transition-all duration-200 w-full md:w-64 text-sm shadow-sm"
        />
        <span className="hidden md:inline text-sm font-bold text-gray-700">Hello User!</span>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="relative p-2 rounded-full hover:bg-blue-50 transition group">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 group-hover:scale-110 transition-transform">1</span>
        </button>
        <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-700 font-semibold text-sm">
          💰 <span>0</span>
        </span>
        <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-700 font-semibold text-sm">
          👜 <span>0</span>
        </span>
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full font-bold shadow-md text-sm cursor-pointer hover:scale-105 transition-transform">
          HU
        </div>
      </div>
      <span className="md:hidden block text-sm font-bold text-gray-700">Hello User!</span>
    </header>
  );
};

export default Header;
