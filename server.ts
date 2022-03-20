import express, { Request, Response } from "express";
import path from "path";
import url from "url";

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname, "build", "index.html");

app.use(express.static("build"));
app.get("*", (req: Request, res: Response) => res.sendFile(fileName));
app.listen(3001, () => console.log("Listening on port 3001"));
