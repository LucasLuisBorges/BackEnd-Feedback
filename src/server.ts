import express from 'express';
import cors from 'cors';
import { routes } from './routes';

// GET = Buscar informação
// POST = Cadastrar informação
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Remover uma informação

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running!')
})