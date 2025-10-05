import express, { Request, Response } from 'express';

const app = express();
const PORT = 4444;

app.use(express.json());

// Some patterns are better to implement in web servers like proxy if you're trying to put cache for example

app.get('/proxy', (req: Request, res: Response) => {
  res.send('🚀 Servidor Express com TypeScript!');
});

app.get('/', (req: Request, res: Response) => {
  res.send('🚀 Servidor Express com TypeScript!');
});

app.post('/hello', (req: Request, res: Response) => {
  const { name } = req.body;
  res.send(`Olá, ${name || 'visitante'}!`);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
