import React from 'react';

const PageHeading = () => {
  return (
    <div className="flex flex-row items-end justify-between px-6 py-8 bg-white">
      {/* Left: Title + Subtitle */}
      <div className="flex flex-col">
        <h1 className="text-[28px] font-bold text-black leading-tight">
          Curator&apos;s Overview
        </h1>
        <p className="mt-4 text-[15px] text-black leading-snug max-w-[400px]">
          Monitoring the clinical pulse of regional healthcare staffing <br />
          through real-time data synthesis and assignment flows.
        </p>
      </div>

      {/* Right: Date and Export Button */}
      <div className="flex items-center gap-4 mb-1">
        {/* Date Display */}
        <div className="flex items-center gap-1.5 text-[14px] font-medium text-black">
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="mb-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>Oct 24 - Oct 30, 2023</span>
        </div>

        {/* Export Button */}
        <button 
          type="button" 
          className="rounded bg-[#f2f2f2] px-3 py-1.5 text-[14px] font-medium text-black hover:bg-[#e5e5e5] transition-colors"
        >
          Export Report
        </button>
      </div>
    </div>
  );
};

export default PageHeading;