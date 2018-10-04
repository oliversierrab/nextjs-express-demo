const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = (process.env.MODE_ENV !== 'production');

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const extraRoutes = require('./routes/index');

    server.use('/api', extraRoutes);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
