"use client";
import DiagnosticIA from "@/components/DiagnosticIA";

export default function IAPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Assistant IA
      </h1>
      <p className="text-gray-600 mb-6">
        Saisissez les symptômes du patient pour obtenir un pré-diagnostic.
      </p>
      <DiagnosticIA
        consultationId={1}
        diagnosticExistant={null}
        confianceExistante={null}
        onDiagnostic={() => {}}
      />
    </div>
  );
}