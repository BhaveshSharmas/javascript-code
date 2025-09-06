import express from 'express';
import cors from 'cors';
import { z } from 'zod';
const app = express();
app.use(cors());
app.use(express.json());
const zo = z.object({
    name: z.string(),
});
app.post("/data", function (req, res) {
    const resp = zo.safeParse(req.body);
    if (!resp.success) {
        return res.status(401).send("Error");
    }
    return res.json({ message: "Success" });
});
app.get("/", function (req, res) {
    return res.json({ message: "Success" });
});
app.listen(4000);
//# sourceMappingURL=index.js.map