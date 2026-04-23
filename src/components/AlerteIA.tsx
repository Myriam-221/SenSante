type AlerteIAProps = {
  diagnostic: string;
  confiance: number;
  niveau: "urgent" | "normal" | "élevé";
};
export default function AlerteIA({ diagnostic, confiance, niveau }: AlerteIAProps) {
  return (
    <div className="rounded-lg bg-red-50 p-5 text-red-800 shadow-sm">
      <h3 className="text-lg font-semibold">Alerte IA</h3>
      <p className="mt-2">{diagnostic}</p>
      <p className="mt-2 text-sm text-red-700">Confiance : {confiance}%</p>
      <p className="mt-1 text-sm uppercase">{niveau}</p>
    </div>
  );
}
