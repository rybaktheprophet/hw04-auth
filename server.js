const app = require('./app');

const serverPort = process.env.PORT || 4000;

app.listen(serverPort, () => {
  console.log(`Server running. Use our API on port: ${serverPort}`);
});
