<<<<<<< HEAD
<<<<<<< HEAD
import AlerteIA from "@/components/AlerteIA";

export default function IAPage() {
  return (
    <div>
=======
=======
>>>>>>> fcc107adf23cfd3040176b621dd8d08c03e2804c
"use client";
import DiagnosticIA from "@/components/DiagnosticIA";

export default function IAPage() {
  return (
    <div className="p-8">
<<<<<<< HEAD
>>>>>>> 5d392ec77597aaba065e288b1414539fa4d5884a
=======
>>>>>>> fcc107adf23cfd3040176b621dd8d08c03e2804c
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Assistant IA
      </h1>
      <p className="text-gray-600 mb-6">
        Saisissez les symptômes du patient pour obtenir un pré-diagnostic.
      </p>
<<<<<<< HEAD
<<<<<<< HEAD
      <AlerteIA
        diagnostic="Suspicion de paludisme. Orientation vers un centre de santé."
        confiance={78}
        niveau="urgent"
      />
    </div>
  );
}
=======
=======
>>>>>>> fcc107adf23cfd3040176b621dd8d08c03e2804c
      <DiagnosticIA
        consultationId={1}
        diagnosticExistant={null}
        confianceExistante={null}
        onDiagnostic={() => {}}
      />
    </div>
  );
<<<<<<< HEAD
}
>>>>>>> 5d392ec77597aaba065e288b1414539fa4d5884a
=======
}
>>>>>>> fcc107adf23cfd3040176b621dd8d08c03e2804c
