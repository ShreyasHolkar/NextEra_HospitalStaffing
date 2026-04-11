// types/nurse.ts
export interface Nurse {
  id: string;
  name: string;
  role: string;
  licenseNumber: string;
  phone: string;
  department: string;
  joinedDate: string;
  avatarInitials: string;
  status: "Available" | "On Shift" | "Off Duty";
  stats: {
    totalAssignments: number;
    upcoming: number;
    completed: number;
    statusLabel: string;
  };
}

export interface Notification {
  id: string;
  type: "assignment" | "reminder" | "update";
  title: string;
  description: string;
  time: string;
  read: boolean;
}

export interface HistoryItem {
  id: string;
  hospital: string;
  date: string;
  shift: string;
  status: "Completed" | "Cancelled";
}
