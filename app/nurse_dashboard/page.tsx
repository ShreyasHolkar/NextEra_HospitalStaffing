import { nurseData } from "@/lib/data";
import StatsBar from "@/components/ui/nurse_dashboard/StatsBar";
import ActiveAssignment from "@/components/ui/nurse_dashboard/ActiveAssignment";
import MySchedule from "@/components/ui/nurse_dashboard/MySchedule";
import NurseProfileCard from "@/components/ui/nurse_dashboard/NurseProfileCard";
import NotificationsPanel from "@/components/ui/nurse_dashboard/NotificationsPanel";
import RecentHistory from "@/components/ui/nurse_dashboard/RecentHistory";
import StatusToggle from "@/components/ui/nurse_dashboard/StatusToggle";

export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#f4f6f8] p-6">
      {/* Welcome header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 mb-0.5">
            Welcome back, {nurseData.name.split(" ")[0]}
          </h1>
          <p className="text-[12px] text-gray-500">
            You have a Morning Shift at Apollo Hospital today.
          </p>
        </div>
        <StatusToggle />
      </div>

      {/* Main two-column layout */}
      <div className="flex gap-5">
        {/* Left — main content */}
        <div className="flex-1 min-w-0">
          <StatsBar stats={nurseData.stats} />
          <ActiveAssignment />
          <MySchedule />
        </div>

        {/* Right — sidebar panels */}
        <div className="w-56 shrink-0">
          <NurseProfileCard nurse={nurseData} />
          <NotificationsPanel />
          <RecentHistory />
        </div>
      </div>
    </div>
  );
}
