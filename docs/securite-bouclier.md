# Rapport Sécurité — Le Bouclier

## Test 1 — Clé API dans Git
✅ La clé GROQ_API_KEY n'est pas dans Git.
✅ Le fichier .env est dans le .gitignore.

## Test 2 — Protection de l'API sans connexion
❌ PROBLÈME : L'API /api/ia/diagnostic renvoie 500 au lieu de 401.
- La vérification de session doit s'exécuter AVANT l'initialisation de Groq.
- Recommandation : déplacer le check session en tout premier dans le handler.

## Conclusion
L'API IA n'est pas correctement protégée.
Un utilisateur non connecté reçoit une erreur 500 au lieu d'un 401.