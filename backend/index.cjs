
const mongoDBPromise = import('./db.js'); 

mongoDBPromise.then(dbModule => {
  dbModule.default().then(({ clothData, categoryData }) => {
    global.clothData = clothData;
    global.clothCategory = categoryData;

    const express = require('express');
    const app = express();
    const port = 5000;

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );  
      next();
    });

    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.use('/api/auth', require('./Routes/Auth'));

    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  }).catch(err => {
    console.error("Error fetching MongoDB data:", err);
  });
}).catch(err => {
  console.error("Error importing db module:", err);
});
