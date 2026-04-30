# Plan Auth — NextAuth.js

## Objectif

Protéger l'application SénSanté avec une authentification par email/mot de passe.

## Stack

- NextAuth.js v5
- Prisma Adapter (pour stocker les sessions en BDD)
- CredentialsProvider (login email + password)

## Étapes prévues

1. Installer NextAuth : `npm install next-auth`
2. Créer `src/app/api/auth/[...nextauth]/route.ts`
3. Configurer le CredentialsProvider
4. Protéger les routes avec `getServerSession`
5. Ajouter les rôles (AGENT, MEDECIN, ADMIN)

## Variables d'environnement nécessaires

- NEXTAUTH_SECRET
- NEXTAUTH_URL
