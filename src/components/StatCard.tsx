type StatCardProps = {
  titre: string;
  valeur: number;
  unite: string;
  couleur: string;
};
export default function StatCard({ titre, valeur, unite, couleur }: StatCardProps) {
  return (
    <div className={`rounded-lg bg-white p-5 shadow-sm border-l-4 ${couleur}`}>
      <p className="text-sm text-gray-500">{titre}</p>
      <p className="mt-3 text-3xl font-bold text-gray-900">{valeur}</p>
      <p className="text-sm text-gray-600">{unite}</p>
    </div>
  );
}
