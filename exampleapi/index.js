const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.get('/user', (req, res) => {
  res.json([
    {
      email: 'valami@valami.hu'
    },
    {
      email: 'valami@valami.hu'
    },
    {
      email: 'valami@valami.hu'
    }
  ]);
});
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
