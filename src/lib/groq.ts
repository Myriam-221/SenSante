// Ce fichier sera implémenté dans le Lab IA (v0.5)
// Il enverra les symptômes à l'API Groq (Llama 3)
// et retournera un pré-diagnostic automatique.

export async function analyserSymptomes(
  symptomes: string[],
  patientInfo: { age?: number; sexe?: string }
): Promise<{ diagnostic: string; confiance: number }> {
  throw new Error("Non implémenté — Lab IA v0.5");
}
