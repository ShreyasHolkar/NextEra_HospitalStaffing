"use client";

import { useState } from "react";

export default function StatusToggle() {
  const [available, setAvailable] = useState(true);

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[12px] font-medium text-gray-500">Status:</span>
      <button
        onClick={() => setAvailable(!available)}
        className={`relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
          available ? "bg-[#0d7c6e]" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ${
            available ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
      <span
        className={`text-[12px] font-semibold ${available ? "text-[#0d7c6e]" : "text-gray-400"}`}
      >
        {available ? "Available" : "Off Duty"}
      </span>
    </div>
  );
}
