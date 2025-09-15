// Minimal demo API for local testing (CORS enabled)
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let store = {
  overview: { playerName: "CJ", cash: 540.0, bank: 12500.0, assets: 32000.0, liabilities: 2500.0 },
  vehicles: [{ id: 1, plate: "SA-CJ 1992", model: "Sultan", color: "Navy" }],
  transactions: [
    { id: 1, type: "income", amount: 1500.0, category: "Lohn", note: "Werkstatt", ts: Date.now() - 86400000 * 2 },
  ],
};

app.get("/api/ping", (req, res) => res.json({ ok: true }));

app.get("/api/overview", (req, res) => res.json(store.overview));

app.get("/api/vehicles", (req, res) => res.json(store.vehicles));
app.post("/api/vehicles", (req, res) => {
  const { plate, model, color } = req.body || {};
  if (!plate || !model) return res.status(400).json({ ok: false, msg: "plate & model required" });
  const id = (store.vehicles.at(-1)?.id || 0) + 1;
  store.vehicles.push({ id, plate, model, color });
  res.json({ ok: true, id });
});

app.get("/api/transactions", (req, res) =>
  res.json([...store.transactions].sort((a, b) => b.ts - a.ts))
);
app.post("/api/transactions", (req, res) => {
  const { type, amount, category, note } = req.body || {};
  if (!type || !amount) return res.status(400).json({ ok: false, msg: "type & amount required" });
  const id = (store.transactions.at(-1)?.id || 0) + 1;
  store.transactions.push({ id, type, amount, category, note, ts: Date.now() });
  res.json({ ok: true, id });
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`Demo API on http://localhost:${PORT}`));
