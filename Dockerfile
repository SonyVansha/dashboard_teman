# Gunakan Node.js versi 18 sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh file project ke dalam container
COPY . .

# Ekspose port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "server.js"]
