"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 4444;
app.use(express_1.default.json());
// Some patterns are better to implement in web servers like proxy if you're trying to put cache for example
app.get('/proxy', (req, res) => {
    res.send('🚀 Servidor Express com TypeScript!');
});
app.get('/', (req, res) => {
    res.send('🚀 Servidor Express com TypeScript!');
});
app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.send(`Olá, ${name || 'visitante'}!`);
});
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
