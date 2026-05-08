# Tests Dashboard - SénSanté

**Date** : 08/05/2026  
**Rédigé par** : [Ton Prénom Nom] - Le Pilote / Le Médecin

## Objectif
Vérifier le bon fonctionnement du tableau de bord (v0.6) : affichage des KPI dynamiques, graphiques et dernières alertes.

## Résultats des tests

### 1. KPI (Indicateurs clés)

| Métrique                    | Valeur affichée | Statut     | Commentaire |
|----------------------------|-----------------|------------|-----------|
| Total Patients             | 12              | ✅         | Correct |
| Total Consultations        | 18              | ✅         | Correct |
| Consultations Terminées    | 15              | ✅         | Correct |
| Alertes Urgentes           | 4               | ✅         | Correct |

### 2. Graphique : Consultations par mois

- **Type** : Bar Chart (6 derniers mois)
- **Résultat** : Le graphique s’affiche correctement avec une répartition visible.
- **Observation** : Bonne lisibilité, les barres correspondent aux données réelles.
- **Statut** : ✅ Fonctionnel

### 3. Répartition des patients par région (Pie Chart)

- **Régions affichées** : Dakar, Thiès, Louga, Ziguinchor, Diourbel, Sédhiou, etc.
- **Résultat** : Le camembert est bien proportionnel au nombre de patients par région.
- **Couleurs** : Distinctes et lisibles.
- **Statut** : ✅ Fonctionnel

### 4. Derniers diagnostics IA (Alertes)

- **Nombre affiché** : 5 dernières alertes
- **Informations présentes** : Patient, Région, Diagnostic, Confiance, Date
- **Exemples** :
  - Moh Seck (Louga) → Infection respiratoire + suspicion paludisme (60%)
  - Bassirou Toure (Dakar) → Infection respiratoire (70%)
  - Fatima Sow (Ziguinchor) → Infection respiratoire (60%)
- **Statut** : ✅ Fonctionnel et à jour

## Tests de dynamisme

- Ajout de 3 nouveaux patients → Total Patients passe de 12 à 15 **(OK)**
- Création de 2 nouvelles consultations → Graphique et KPI se mettent à jour **(OK)**
- Lancement de nouveaux diagnostics IA → Section "Derniers diagnostics" se rafraîchit **(OK)**

## Observations générales

- Le dashboard est **responsive** (s’affiche bien sur mobile et desktop).
- Temps de chargement : rapide (< 2 secondes).
- Données bien agrégées grâce à Prisma (`count()` + `groupBy`).
- Design clair et professionnel.
- Tous les éléments demandés dans le lab sont présents (KPI + BarChart + PieChart + Alertes).

## Difficultés rencontrées & Solutions

- Problème de données vides au début → Solution : Création de données de test par toute l’équipe.
- Graphique Recharts non affiché → Solution : Vérification des imports et des clés `dataKey`.
- API `/api/stats` renvoyait une erreur 401 → Solution : Ajout de la session utilisateur.

---
**Conclusion** : Le tableau de bord fonctionne parfaitement. Il donne une vue d’ensemble claire et dynamique de l’activité de SénSanté. Toutes les exigences du Lab Dashboard (v0.6) sont validées.

**Preuve** : Captures d’écran du dashboard (KPI + graphiques + alertes) jointes.