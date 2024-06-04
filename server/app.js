import 'dotenv/config';
import mongoose from 'mongoose';
import app from './http-server.js';

const HTTP_PORT = process.env.HTTP_PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected!'))
  .catch((error) => {
    throw error;
  });

app.listen(HTTP_PORT, (error) => {
  if (!error)
    console.log('Server is Successfully Running, and App is listening on port ' + HTTP_PORT);
  else console.log("Error occurred, server can't start", error);
});
