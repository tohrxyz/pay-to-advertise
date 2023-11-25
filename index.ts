import express from 'express';
import { exec } from 'child_process';
const app = express();

app.use(express.json());

app.post('/open-url', (req, res) => {
    const url = req.body.url;
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

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});