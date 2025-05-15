// drizzle.config.ts
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out:   "./drizzle",
  dialect: "postgresql",

  // agora só “url”, não “connectionString”
  dbCredentials: {
    url: process.env.DATABASE_URL!,  
  },
});
