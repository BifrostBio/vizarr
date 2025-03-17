FROM node AS build

WORKDIR /app
COPY src src/
COPY patches patches/
COPY package.json .
COPY main.ts .
COPY tsconfig.json .
COPY vite.config.js .
COPY biome.json .
COPY index.html .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM nginx:alpine AS run
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
