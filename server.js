import app from './app';

const port = 3002;
app.listen(port, () => {
  console.log();
  console.log(`Escuntando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:3002 ${port}`);
});
