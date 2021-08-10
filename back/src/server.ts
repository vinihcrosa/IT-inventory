import app from './app';

import './databse/connect'

app.listen(3333, () => {
  console.log("👂 Listenning on port 3333")
})