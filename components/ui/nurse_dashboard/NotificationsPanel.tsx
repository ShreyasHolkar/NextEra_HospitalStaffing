"use client";

import { useState } from "react";
import type { Notification } from "@/types/nurse";
import { notifications as initialNotifications } from "@/lib/data";

const dotColors: Record<Notification["type"], string> = {
  assignment: "bg-blue-500",
  reminder: "bg-amber-400",
  update: "bg-gray-400",
};

export default function NotificationsPanel() {
  const [items, setItems] = useState<Notification[]>(initialNotifications);
  const unread = items.filter((n) => !n.read).length;

  const clearAll = () => setItems([]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[13px] font-bold text-gray-900">Notifications</h3>
        {unread > 0 && (
          <span className="text-[9px] font-bold bg-red-500 text-white rounded-full px-2 py-0.5">
            {unread} New
          </span>
        )}
      </div>

      {/* List */}
      <div className="space-y-3 mb-4">
        {items.length === 0 ? (
          <p className="text-[12px] text-gray-400 text-center py-3">All caught up!</p>
        ) : (
          items.map((n) => (
            <div key={n.id} className="flex items-start gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${dotColors[n.type]}`} />
              <div>
                <p className="text-[12px] font-semibold text-gray-800 leading-snug">{n.title}</p>
                <p className="text-[11px] text-gray-500">{n.description}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{n.time}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <button
          onClick={clearAll}
          className="w-full text-[10px] font-bold tracking-widest text-gray-400 uppercase hover:text-gray-600 transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
