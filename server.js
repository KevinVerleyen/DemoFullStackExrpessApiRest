import express from "express";
import fs from "fs";
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";
import db from "./models/index.js";

const app = express();
const port = 3000;

// Déterminer le répertoire des routes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routeDir = path.join(__dirname, "routers");

// Fonction pour charger dynamiquement les routes
const chargerRoutes = async () => {
  try {
    const fichiers = fs
      .readdirSync(routeDir)
      .filter((file) => file.endsWith(".js"));

    for (const file of fichiers) {
      const modulePath = pathToFileURL(path.join(routeDir, file));
      const routeModule = await import(modulePath);

      if (routeModule.default) {
        app.use("/api", routeModule.default);
        console.log(`✅ Route chargée : ${file}`);
      }
    }
  } catch (error) {
    console.error("❌ Erreur lors du chargement des routes :", error);
  }
};

app.use(express.json());
