import express from 'express';
import { exec } from 'child_process';
const app = express();

app.use(express.json());

app.get('/open-url', (req, res) => {
    const url = req.query.url;
    console.log(req.body)
    console.log(url)
    exec(`firefox ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    res.send('URL opened');
});

app.post('/paid', (req, res) => {
  const status = req.body.status;
  const posData = req.body.posData;
  console.log("posData: ", posData);
  
  if (status == 'complete') {
      console.log(req.body)
      const url = posData.p2ad_url;
      exec(`firefox ${url}`, (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          console.log(`stdout: ${stdout}`);
      });
      res.send('paid');
    } else {
      res.send('not paid yet');
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});