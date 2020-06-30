import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

routes.post('/usuarios', (request, response) => {
    const { name, email } = request.body;

    const user = {
        name,
        email,
    };

    return response.json(user);
});

app.listen(3333);
