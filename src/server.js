import express from 'express';
import bodyParser from 'body-parser';
import basicAuth from 'basic-auth';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite todas as origens
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Cabeçalhos permitidos
    next();
});

app.use(cors());

const SECRET_KEY = 'mysecretkey';
const users = [{
    email: 'admin',
    password: '123'
}];

// Rota para cadastrar usuário
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Verifica se o email já está registrado
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = {
        email,
        password
    };

    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
});

// Rota de login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const existingUser = users.find(user => user.email === email);
    if (!existingUser) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (password !== existingUser.password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user: { email: existingUser.email } });
});

// Rota acessível a todos
app.get('/protected', (req, res) => {
    res.json({ message: 'This is a protected route, but accessible to everyone now' });
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
