import Header from "@/components/ui/Header";
import OperationsCenter from "@/components/ui/OperationsCenter";
import ClinicalPersonnel from "@/components/ui/ClinicalPersonnel";
import PersonnelSolutions from "@/components/ui/PersonnelSolutions";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eef0f4] flex flex-col">
      <Header />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3">
        <OperationsCenter />
        <ClinicalPersonnel />
        <PersonnelSolutions />
      </main>
      <Footer />
    </div>
  );
}