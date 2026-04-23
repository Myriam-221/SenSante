type ConsultationCardProps = {
  patient: string;
  date: string;
  symptomes: string;
  statut: string;
};
export default function ConsultationCard({ patient, date, symptomes, statut }: ConsultationCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{patient}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-3 text-gray-700">{symptomes}</p>
      <span className="mt-4 inline-block rounded-full border px-3 py-1 text-sm text-teal-700 border-teal-500">
        {statut}
      </span>
    </div>
  );
}
