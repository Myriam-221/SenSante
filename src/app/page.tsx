import PatientCard from "@/components/PatientCard";
import AlerteIA from "@/components/AlerteIA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-teal-700 text-white p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">SénSanté</h1>
        <span className="text-sm text-teal-200">Assistant de santé communautaire</span>
      </header>

      <main className="p-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Derniers patients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <PatientCard nom="Fatou Ida Seck" region="Dakar" age={21} sexe="F" />
          <PatientCard nom="Ibrahima Ba" region="Thiès" age={45} sexe="M" />
          <PatientCard nom="Awa Diallo" region="Saint-Louis" age={28} sexe="F" />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Alerte IA</h2>
        <AlerteIA
          diagnostic="Suspicion de paludisme. Orientation recommandée."
          confiance={78}
          niveau="urgent"
        />
      </main>
    </div>
  );
}