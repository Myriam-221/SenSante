# Tests IA - SénSanté

**Date** : 08/05/2026  
**Rédigé par** : [Ton Prénom Nom] - Le Médecin

## Objectif
Tester le module de diagnostic IA (Groq + Llama 3.3) avec des cas variés et évaluer la cohérence, la pertinence et le comportement du modèle.

## Cas de test réalisés

### 1. Moh Seck
- **Région** : Louga  
- **Date** : 01/05/2026  
- **Symptômes** : Douleur abdominale, Diarrhée, Douleur thoracique  
- **Résultat IA** :
  - Diagnostic : Infection respiratoire aiguë (possible pneumonie ou grippe), avec possible co-infection paludisme
  - Confiance : **60%**
  - Urgence : **Moyen**

**Pertinence** : Bonne (le modèle prend en compte la région et le risque de paludisme) ✅

### 2. Bassirou Toure
- **Région** : Dakar  
- **Date** : 01/05/2026  
- **Symptômes** : Fatigue, Éruption cutanée, Vertiges  
- **Résultat IA** :
  - Diagnostic : Infection respiratoire aiguë avec possible co-infection paludisme
  - Confiance : **70%**
  - Urgence : **Moyen**

**Pertinence** : Moyenne (les symptômes cutanés et vertiges sont peu mis en avant) ⚠️

### 3. Duplex Flex
- **Région** : Diourbel  
- **Date** : 08/05/2026  
- **Symptômes** : Fièvre, Toux  
- **Résultat IA** :
  - Diagnostic : Infection respiratoire aiguë (pneumonie ou grippe), possibilité de coronavirus
  - Confiance : **60%**
  - Urgence : **Moyen**

**Pertinence** : Bonne ✅

### 4. Fatima Sow
- **Région** : Ziguinchor  
- **Date** : 08/05/2026  
- **Symptômes** : Fièvre, Toux, Diarrhée  
- **Résultat IA** :
  - Diagnostic : Infection respiratoire avec possible paludisme
  - Confiance : **60%**
  - Urgence : **Moyen**

**Pertinence** : Bonne (prise en compte de la région) ✅

### 5. Lionnel Luthor
- **Région** : Dakar  
- **Date** : 08/05/2026  
- **Symptômes** : Fièvre, Douleur abdominale, Douleur thoracique, Essoufflement  
- **Résultat IA** :
  - Diagnostic : Infection respiratoire (pneumonie/grippe) avec possible paludisme
  - Confiance : **60%**
  - Urgence : **Moyen**

**Pertinence** : Bonne ✅

### 6. Khadija Seydi
- **Région** : Sédhiou  
- **Date** : 08/05/2026  
- **Symptômes** : Fièvre, Toux, Diarrhée, Vomissements, Éruption cutanée, Essoufflement, Vertiges  
- **Résultat IA** :
  - Diagnostic : Infection respiratoire aiguë avec possible co-infection paludisme
  - Confiance : **60%**
  - Urgence : **Moyen**

**Pertinence** : Bonne (gestion d’un cas polymorphe) ✅

### 7. Mouhamed Gueye (2 tests)
- **Région** : Dakar  
- **Symptômes** : Fièvre, Toux, Maux de tête + notes sur la durée  
- **Résultat IA** : Infection respiratoire avec suspicion de paludisme malgré symptômes atypiques  
- **Confiance** : **60%**  
- **Urgence** : **Moyen**

**Pertinence** : Bonne ✅

## Observations générales

- Le modèle **prend correctement en compte la région** du patient (risque de paludisme).
- La **confiance** oscille souvent autour de 60-70%.
- L’urgence est presque toujours **Moyen**, même dans des cas assez variés.
- Le diagnostic est très souvent orienté vers **"Infection respiratoire aiguë + possible paludisme"**.
- Le disclaimer médical apparaît systématiquement.
- Temps de réponse : rapide (1 à 2 secondes).

## Améliorations suggérées
- Améliorer le prompt pour mieux différencier les pathologies selon les symptômes dominants.
- Augmenter la variété des diagnostics (le modèle est un peu répétitif).
- Ajouter le poids ou les antécédents médicaux dans le prompt.

---
**Conclusion** : L’intégration IA fonctionne correctement. Les diagnostics sont prudents et contextualisés au Sénégal, même si le modèle manque parfois de précision sur certains profils de symptômes.
