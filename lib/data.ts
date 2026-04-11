import type { Nurse, Notification, HistoryItem } from "@/types/nurse";

export const nurseData: Nurse = {
  id: "nurse-001",
  name: "Priya Sharma",
  role: "Senior Staff Nurse",
  licenseNumber: "RN-4821-2019",
  phone: "+91 98765 43210",
  department: "ICU",
  joinedDate: "Aug 2021",
  avatarInitials: "PS",
  status: "Available",
  stats: {
    totalAssignments: 42,
    upcoming: 3,
    completed: 39,
    statusLabel: "Active",
  },
};

export const notifications: Notification[] = [
  {
    id: "n1",
    type: "assignment",
    title: "New Assignment: Fortis Hospital",
    description: "Emergency ward – Evening Shift",
    time: "10 mins ago",
    read: false,
  },
  {
    id: "n2",
    type: "reminder",
    title: "Reminder: Upcoming shift",
    description: "Apollo Hospital starts in 2 hours.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "n3",
    type: "update",
    title: "Shift Update",
    description: "Reporting time changed for Friday's shift.",
    time: "5 hours ago",
    read: true,
  },
];

export const recentHistory: HistoryItem[] = [
  {
    id: "h1",
    hospital: "Max Healthcare",
    date: "Oct 21 • Morning",
    shift: "Morning",
    status: "Completed",
  },
  {
    id: "h2",
    hospital: "Medanta",
    date: "Oct 19 • Night",
    shift: "Night",
    status: "Completed",
  },
];
