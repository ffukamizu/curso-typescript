import { prototype } from 'events';
import express, { Request, Response } from 'express';

const app = express();

app.get('/health', (req: Request, res: Response) => res.status(200).send('Im ok!'));

app.get('/today', (req: Request, res: Response) => {
    res.send({
        today: new Date().toLocaleDateString('pt-br'),
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is online, PORT: ${PORT}`));
