import bcrypt from 'bcrypt';
const usuarios = [
    {
        name: 'Mariano Islas',
        email: 'marianoislasblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Alejandro Jjajja',
        email: 'alejandroajjablocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Yulissa Ortega',
        email: 'yuliortegablocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Haziel Ramirez',
        email: 'yayoblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Irving Morales',
        email: 'mordoblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Jesus Carballo',
        email: 'carballitoblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Gris Franco',
        email: 'francogrisblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Emiliano Islas',
        email: 'islasemilianoblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Marco Ramírez',
        email: 'marcoloversblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    },
    {
        name: 'Romero Gonzales',
        email: 'aleromeblocvs1@gamail.com',
        password: bcrypt.hashSync('password',10),
        token: null,
        veryfied: 1
    }
]
export default usuarios;