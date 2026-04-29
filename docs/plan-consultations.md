# Plan Consultations

## Objectif

Permettre à un agent de santé d'enregistrer une consultation pour un patient.

## Champs du formulaire de consultation

- Patient (sélection depuis la liste)
- Date de consultation (automatique)
- Symptômes (liste à cocher ou champ texte JSON)
  - Fièvre, Toux, Maux de tête, Douleurs abdominales...
- Notes libres (texte)
- Statut : en_attente / traité / référé

## Format des symptômes (JSON)

```json
{
  "fievre": true,
  "toux": false,
  "maux_de_tete": true,
  "temperature": 38.5
}
```

## Lien avec le schéma Prisma

- `patientId` : clé étrangère vers Patient
- `userId` : l'agent qui fait la consultation
- `symptomes` : champ Json dans Prisma
- `diagnosticIa` : rempli par Groq après soumission
