import 'dotenv/config';
import app from './http-server.js';

const HTTP_PORT = process.env.HTTP_PORT || 8080;

app.listen(HTTP_PORT, (error) => {
  if (!error)
    console.log('Server is Successfully Running, and App is listening on port ' + HTTP_PORT);
  else console.log("Error occurred, server can't start", error);
});
