interface AlerteIAProps {
  diagnostic: string;
  confiance: number;
  niveau: "faible" | "moyen" | "urgent";
}

export default function AlerteIA({
  diagnostic,
  confiance,
  niveau,
}: AlerteIAProps) {
  const styles = {
    faible: {
      container: "border-green-500 bg-green-50",
      badge: "bg-green-100 text-green-700",
      icon: "🟢",
      label: "Faible",
      bar: "bg-green-500",
    },
    moyen: {
      container: "border-orange-500 bg-orange-50",
      badge: "bg-orange-100 text-orange-700",
      icon: "🟡",
      label: "Modéré",
      bar: "bg-orange-500",
    },
    urgent: {
      container: "border-red-500 bg-red-50",
      badge: "bg-red-100 text-red-700",
      icon: "🔴",
      label: "Urgent",
      bar: "bg-red-500",
    },
  };

  const s = styles[niveau];

  return (
    <div className={`rounded-lg p-6 border-l-4 ${s.container} shadow-md`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{s.icon}</span>
          <h3 className="font-bold text-gray-800 text-lg">Résultat IA</h3>
        </div>
        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${s.badge}`}>
          {s.label}
        </span>
      </div>
      <p className="mt-2 text-gray-700 font-medium">{diagnostic}</p>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-500">Indice de confiance</span>
          <span className="text-sm font-bold text-gray-700">{confiance}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${s.bar}`}
            style={{ width: `${confiance}%` }}
          />
        </div>
      </div>
      <p className="text-xs text-gray-400 italic mt-4 border-t border-gray-200 pt-3">
        ⚠️ Ceci n'est pas un diagnostic médical. Consultez un professionnel de santé.
      </p>
    </div>
  );
}