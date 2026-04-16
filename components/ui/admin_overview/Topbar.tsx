"use client";

import { useState } from "react";

export default function Topbar() {
  const [bellHovered, setBellHovered] = useState(false);
  const [gearHovered, setGearHovered] = useState(false);
  const [avatarClicked, setAvatarClicked] = useState(false);

  return (
    <header className="shrink-0 flex items-center justify-between relative h-[52px] bg-[#eaf0fb] border-b border-[#d5e0f0] pl-6 pr-5">

      {/* Search */}
      <div className="flex items-center gap-[7px] bg-white border border-[#d9e4f0] rounded-[8px] px-[12px] py-[6px] w-[200px]">
        <svg
          className="w-[13px] h-[13px] text-[#94a3b8] shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-[12px] text-[#94a3b8] whitespace-nowrap">
          Search curated data...
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-[5px]">

        {/* Bell */}
        <button
          onMouseEnter={() => setBellHovered(true)}
          onMouseLeave={() => setBellHovered(false)}
          className={`w-[34px] h-[34px] flex items-center justify-center rounded-[9px] transition-all duration-150
            ${bellHovered
              ? "bg-white/75 shadow-[0_1px_4px_rgba(74,111,163,0.13)] scale-110"
              : "bg-transparent scale-100"
            }`}
        >
          <svg
            className={`w-[17px] h-[17px] transition-colors duration-150 ${
              bellHovered ? "text-[#1a4fad]" : "text-[#4e6fa3]"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        {/* Gear */}
        <button
          onMouseEnter={() => setGearHovered(true)}
          onMouseLeave={() => setGearHovered(false)}
          className={`w-[34px] h-[34px] flex items-center justify-center rounded-[9px] transition-all duration-150
            ${gearHovered
              ? "bg-white/75 shadow-[0_1px_4px_rgba(74,111,163,0.13)] rotate-[90deg] scale-110"
              : "bg-transparent rotate-0 scale-100"
            }`}
        >
          <svg
            className={`w-[17px] h-[17px] transition-colors duration-150 ${
              gearHovered ? "text-[#1a4fad]" : "text-[#4e6fa3]"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Spacer */}
        <div className="w-[10px]" />

        {/* User */}
        <div className="flex items-center gap-[8px]">

          <div className="text-right">
            <p className="text-[12.5px] font-bold text-[#1e3a6e] leading-none">
              Alex Rivera
            </p>
            <p className="text-[10px] font-medium text-[#7a9cc8] mt-[3px] leading-none">
              Head Curator
            </p>
          </div>

          {/* Avatar */}
          <button
            onClick={() => setAvatarClicked(v => !v)}
            className={`w-[34px] h-[34px] rounded-full overflow-hidden transition-all duration-150 flex-shrink-0
              ${avatarClicked
                ? "scale-[1.08] border-[2.5px] border-[#1a56c4] shadow-[0_0_0_4px_rgba(26,86,196,0.18)]"
                : "border-[2.5px] border-transparent scale-100"
              }`}
          >
            <svg viewBox="0 0 34 34" className="w-full h-full">
              <circle cx="17" cy="17" r="17" fill="#8b6348" />
              <circle cx="17" cy="13" r="6" fill="#c8956c" />
              <ellipse cx="17" cy="28" rx="10" ry="7" fill="#c8956c" />
            </svg>
          </button>
        </div>

        {/* Dropdown */}
        {avatarClicked && (
          <div className="absolute top-[54px] right-[18px] bg-white border border-[#d5e0f0] rounded-[12px] shadow-[0_8px_24px_rgba(30,58,110,0.12)] min-w-[170px] z-50 p-[6px]">

            <div className="px-[12px] py-[10px] border-b border-[#eef2f8]">
              <p className="text-[13px] font-bold text-[#1e3a6e]">Alex Rivera</p>
              <p className="text-[11px] text-[#7a9cc8] mt-[2px]">Head Curator</p>
            </div>

            <DropdownItem label="View Profile" iconPath="..." />
            <DropdownItem label="Account Settings" iconPath="..." />

            <div className="h-[1px] bg-[#eef2f8] my-[4px]" />

            <DropdownItem label="Sign Out" iconPath="..." danger />
          </div>
        )}
      </div>
    </header>
  );
}

function DropdownItem({
  label,
  iconPath,
  danger = false,
}: {
  label: string;
  iconPath: string;
  danger?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-full flex items-center gap-[9px] px-[12px] py-[8px] rounded-[8px] text-left transition
        ${hovered
          ? danger ? "bg-[#fff5f5]" : "bg-[#f0f6ff]"
          : "bg-transparent"
        }`}
    >
      <svg
        className={`w-[14px] h-[14px] shrink-0 ${
          danger ? "text-[#e53e3e]" : "text-[#4e6fa3]"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>

      <span
        className={`text-[12.5px] font-medium ${
          danger ? "text-[#e53e3e]" : "text-[#1e3a6e]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}