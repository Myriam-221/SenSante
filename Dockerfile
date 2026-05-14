# 1. Image de base
FROM node:20-alpine
WORKDIR /app

# 2. Copier les dépendances (CORRIGÉ : package-lock.json sans espace)
COPY package.json package-lock.json ./

# 3. Installer
RUN npm ci

# 4. Copier le code (CORRIGÉ : syntaxe propre)
COPY . .

# 5. Build et Prisma
RUN npx prisma generate
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]