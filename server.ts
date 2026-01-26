import express, { NextFunction, Request, Response } from 'express';
import { decoratorPatternFunction } from './src/Decorator/DecoratorFunctionImplementation';
import { facadePatternFunction } from './src/Facade/FacadeFunctionImplementation';
import { proxyPatternFunction } from './src/Proxy/ProxyFunctionImplementation';
import { singletonPatternFunction } from './src/Singleton/SingletonFunctionImplementation';
import { observerPatternFunction } from './src/Observer/ObserverFunctionImplementation';

const app = express();
const PORT = 4444;

app.use(express.json());

// Some patterns are better to implement in web servers like proxy if you're trying to put cache for example

app.get('/decorator', async (req: Request, res: Response) => {
  const response = await decoratorPatternFunction();
  res.send(response);
});

app.get('/facade', async (req: Request, res: Response) => {
  const response = await facadePatternFunction();
  res.send(response);
});

app.get('/observer', async (req: Request, res: Response) => {
  const response = await observerPatternFunction();
  res.send(response);
});

app.get('/proxy', async (req: Request<void, void, void, { name: string }>, res: Response) => {
  const { name } = req.query;
  const response = await proxyPatternFunction(name);
  res.send(response);
});

app.get('/singleton', async (req: Request, res: Response) => {
  const response = await singletonPatternFunction();
  res.send(response);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({
    message: 'Internal server error',
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
