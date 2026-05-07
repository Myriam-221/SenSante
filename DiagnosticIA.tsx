"use client";
import React, { useState } from "react";

interface DiagnosticIAProps {
  consultationId: number;
  diagnosticExistant: string | null;
  confianceExistante: number | null;
  onDiagnostic: () => void;
}

export default function DiagnosticIA({
  consultationId,
  diagnosticExistant,
  confianceExistante,
  onDiagnostic,
}: DiagnosticIAProps) {
  const [loading, setLoading] = useState(false);
  const [resultat, setResultat] = useState<{
    diagnostic: string;
    confiance: number;
    recommandation: string;
    urgence: string;
  } | null>(null);

  const styles = {
    faible: {
      container: "border-green-500 bg-green-50",
      badge: "bg-green-100 text-green-700",
      label: "FAIBLE",
      bar: "bg-green-500",
    },
    moyen: {
      container: "border-orange-500 bg-orange-50",
      badge: "bg-orange-100 text-orange-700",
      label: "MOYEN",
      bar: "bg-orange-500",
    },
    urgent: {
      container: "border-red-500 bg-red-50",
      badge: "bg-red-100 text-red-700",
      label: "URGENT",
      bar: "bg-red-500",
    },
  };

  async function lancer() {
    setLoading(true);
    const res = await fetch("/api/ia/diagnostic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patient: {
          nom: "Sow",
          prenom: "Aminata",
          age: 34,
          sexe: "F",
          region: "Dakar",
        },
        symptomes: ["Fièvre", "Toux", "Fatigue"],
        notes: "Se plaint de fièvre depuis 3 jours.",
      }),
    });
    if (res.ok) {
      const data = await res.json();
      setResultat(data);
      onDiagnostic();
    }
    setLoading(false);
  }

  if (diagnosticExistant) {
    return (
      <div className="mt-3 p-4 rounded-lg border-l-4 border-teal-500 bg-teal-50">
        <p className="font-bold text-teal-800">Diagnostic IA</p>
        <p className="text-sm text-gray-700 mt-1">{diagnosticExistant}</p>
        <p className="text-xs text-gray-500 mt-1">Confiance : {confianceExistante}%</p>
        <p className="text-xs text-gray-400 italic mt-2">
          Ceci n'est pas un diagnostic médical.
        </p>
      </div>
    );
  }

  if (!resultat) {
    return (
      <div className="mt-3">
        <button
          onClick={lancer}
          disabled={loading}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 text-sm"
        >
          {loading ? "Analyse en cours..." : "Lancer le diagnostic IA"}
        </button>
      </div>
    );
  }

  const s = styles[resultat.urgence as keyof typeof styles] || styles.moyen;

  return (
    <div className={`p-4 rounded-lg border-l-4 ${s.container} shadow-md`}>
      <div className="flex justify-between items-center mb-3">
        <p className="font-bold text-gray-800 text-lg">Diagnostic IA</p>
        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${s.badge}`}>
          {s.label}
        </span>
      </div>
      <p className="text-sm text-gray-700 mt-2">{resultat.diagnostic}</p>
      <p className="text-sm text-gray-600 mt-2">{resultat.recommandation}</p>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-500">Confiance</span>
          <span className="text-sm font-bold text-gray-700">{resultat.confiance}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${s.bar}`}
            style={{ width: `${resultat.confiance}%` }}
          />
        </div>
      </div>
      <p className="text-xs text-gray-400 italic mt-4 border-t border-gray-200 pt-3">
        ⚠️ Ceci n'est pas un diagnostic médical. Consultez un professionnel de santé.
      </p>
    </div>
  );
}