// server.ts
import express from 'express';
import connect from 'C:\Users\Timkie\Documents\Coding\React\react-app\src\mongo.ts';

(async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  const client = await connect();
  const db = client.db('your-db-name');

  // Definieren Sie hier Ihre API-Endpunkte und verwenden Sie die `db`-Variable, um auf Ihre Datenbank zuzugreifen

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();