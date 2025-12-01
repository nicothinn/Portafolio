# Usar la imagen de Node que ya descargaste
FROM node:24-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto de Vite (por defecto 5173)
EXPOSE 5173

# Comando por defecto: ejecutar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
