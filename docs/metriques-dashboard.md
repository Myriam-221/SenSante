# Métriques du Dashboard SénSanté

## KPI principaux
- Nombre total de patients enregistrés
- Nombre total de consultations
- Nombre de diagnostics IA générés (statut "termine")
- Nombre d'alertes urgentes (confiance >= 60 + diagnosticIa non null)

## Métriques IA spécifiques
- Répartition des niveaux d'urgence (faible / moyen / urgent)
- Taux de confiance moyen des diagnostics
- Nombre de diagnostics par région
- Évolution des consultations sur les 6 derniers mois

## Graphiques prévus
- BarChart : consultations par mois (axe X = mois, axe Y = nombre)
- PieChart : répartition des patients par région
- Liste : derniers diagnostics IA avec badge d'urgence

## Requêtes Prisma envisagées
- prisma.patient.count() → total patients
- prisma.consultation.count() → total consultations
- prisma.consultation.count({ where: { statut: "termine" } })
- prisma.consultation.count({ where: { confiance: { gte: 60 }, diagnosticIa: { not: null } } })
- prisma.patient.groupBy({ by: ["region"], _count: true })

## Notes
Préparé par Le Pilote — Lab IA (v0.5)
Ces métriques seront implémentées dans le Lab Dashboard (v0.6).