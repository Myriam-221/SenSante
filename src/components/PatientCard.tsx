type PatientCardProps = {
  nom: string;
  region: string;
  age: number;
  sexe: string;
};
export default function PatientCard({ nom, region, age, sexe }: PatientCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{nom}</h3>
      <p className="text-sm text-gray-500">{region}</p>
      <p className="mt-2 text-gray-700">{age} ans • {sexe}</p>
    </div>
  );
}
