// @ts-check
const config = require('config');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/t', require('./routes/redirect.routes'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

start();

async function start() {
  try {
    const connection = await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    const appPort = config.get('port') || 5000;
    app.listen(appPort, () => console.log(`App has been started, http://localhost:${appPort}`));
  } catch (err) {
    console.error('Server error: ', err);
    process.exit(1);
  }
}
