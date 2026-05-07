import { analyserSymptomes } from "@/lib/groq";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { patient, symptomes, notes } = await request.json();

    const resultat = await analyserSymptomes(
      patient,
      symptomes,
      notes
    );

    return NextResponse.json(resultat);

  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de l'analyse IA" },
      { status: 500 }
    );
  }
}