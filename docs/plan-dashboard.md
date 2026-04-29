# Plan Dashboard

## Objectif
Afficher les statistiques clés de SénSanté pour les médecins et admins.

## Métriques prévues
- Nombre total de patients enregistrés
- Nombre de consultations ce mois-ci
- Répartition des patients par région (graphique)
- Consultations par statut (en_attente / traité / référé)
- Top symptômes les plus fréquents

## Graphiques envisagés
- Graphique en barres : patients par région
- Graphique en secteurs : consultations par statut
- Courbe : évolution des consultations sur 30 jours

## Librairie graphique
- Recharts (compatible React/Next.js)
  `npm install recharts`

## Données nécessaires (API Routes)
- GET /api/stats/patients → count par région
- GET /api/stats/consultations → count par statut
- GET /api/stats/evolution → consultations par jour