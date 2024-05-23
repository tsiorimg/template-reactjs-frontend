FROM node:18

WORKDIR /app

# Copier uniquement package.json et package-lock.json pour tirer parti du cache Docker
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers
COPY . .

# Définir la variable d'environnement pour OpenSSL
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apt-get update && apt-get install -y iputils-ping

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
