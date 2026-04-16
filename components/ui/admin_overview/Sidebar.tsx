"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  ClipboardList,
  Building2,
  Users,
  Database,
  LifeBuoy,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const router = useRouter();

  const menuItems = [
    { id: 'Dashboard',        icon: <LayoutDashboard size={16} />, label: 'Dashboard' },
    { id: 'Requests',         icon: <ClipboardList   size={16} />, label: 'Requests' },
    { id: 'Hospitals',        icon: <Building2       size={16} />, label: 'Hospitals' },
    { id: 'Assignments',      icon: <Users           size={16} />, label: 'Assignments' },
    { id: 'Nurse Repository', icon: <Database        size={16} />, label: 'Nurse Repository' },
  ];

  return (
    <aside
      className="flex flex-col select-none"
      style={{
        width: '172px',
        minWidth: '172px',
        minHeight: '100vh',
        background: '#e8eef8',
        padding: '20px 10px 24px 10px',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center"
        style={{ gap: '10px', marginBottom: '28px', paddingLeft: '6px' }}
      >
        <div
          className="flex items-center justify-center rounded-xl shrink-0"
          style={{ width: 34, height: 34, background: '#1a56c4' }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </div>
        <div className="flex flex-col" style={{ gap: '3px' }}>
          <span style={{ fontSize: 13.5, fontWeight: 700, color: '#1e3a6e', lineHeight: 1 }}>
            StaffPulse
          </span>
          <span style={{ fontSize: 8, fontWeight: 600, color: '#7a9cc8', letterSpacing: '0.10em', textTransform: 'uppercase', lineHeight: 1 }}>
            Clinical Curator
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="flex flex-col"
        style={{ gap: '4px', paddingLeft: '2px', paddingRight: '2px' }}
      >
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Footer */}
      <div
        className="flex flex-col"
        style={{ gap: '4px', paddingLeft: '2px', paddingRight: '2px' }}
      >
        <NavItem
          icon={<LifeBuoy size={16} />}
          label="Support"
          isActive={activeItem === 'Support'}
          onClick={() => setActiveItem('Support')}
        />
        <NavItem
          icon={<LogOut size={16} />}
          label="Sign Out"
          isActive={activeItem === 'Sign Out'}
          onClick={() => router.push('/')}
        />
      </div>
    </aside>
  );
};

const NavItem = ({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        padding: '8px 12px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background 0.18s',
        background: isActive
          ? '#ffffff'
          : hovered
          ? 'rgba(255,255,255,0.55)'
          : 'transparent',
      }}
    >
      <span style={{ color: isActive ? '#1a4fad' : '#7a9cc8', flexShrink: 0, display: 'flex' }}>
        {icon}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: isActive ? 700 : 500,
          color: isActive ? '#1a4fad' : '#4e6fa3',
          lineHeight: 1.2,
          whiteSpace: 'nowrap',
          transition: 'color 0.18s',
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default Sidebar;
