require('./Models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');


const privateToken = "AntonioElErizo";

/*Express es la librería del srv*/
const express = require('express');

/*Objeto encargado de gestionar nuestros endpoints*/
const router = express.Router();
/*Trata la info que llega del cli*/
const bodyParser = require('body-parser');
/*Habilitar cualquier conex al srv*/
const cors = require('cors');
/*Instanciamos nuestro servidor*/
const app = express();
/*Le decimos al servidor que la información a tratar es json*/
app.use(bodyParser.json());
/*Le decimos al servidor que habilite cualquier conex*/
app.use(cors());

/* Las variables que me devuelve el callback serán la petición del cliente (req) y la respuesta del servidor (res) */
router.get('/users', (req, res) => {

    User.find({}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    })
});

router.get('/users/:user_id', (req, res) => {

    User.find({
        _id: req.params.user_id
    }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            res.send(doc[0].lastname);
        }
    })
});

router.post('/users', (req, res) => {
    User.create(req.body).then((doc) => {
        res.send(doc);
    })
})

router.put('/users', (req, res) => {
    User.findOneAndUpdate({
        _id: req.body._id
    }, req.body, {
        new: true,
        useFindAndModify: false
    }).then((doc) => {
        res.send(doc);
    })
})


/* */
router.post('/auth', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;


    User.findOne({
       email: email,
       password: password 
    }, (err, user) => {
        if(user != null)
        {
            //En caso de que el user exista construimos el token con payload y la clave para después devolverlo

            let token = jwt.sign({...user}, privateToken);
            res.send(JSON.stringify(token));
        } else {
            res.status(401).send({message: 'Error de autenticación'});
        }
    })

});


/*Le decimos a nuestra aplicación express que el objeto router va a formar parte de la aplicación con todos sus endpoints*/
app.use(router);




/*Creamos la conexión con la DB*/

mongoose.connect('mongodb+srv://AdminCiC:CapiCames6@ax.y45ur.mongodb.net/AXDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err;
    else console.log('Successfully connected to database!');
});


/*Corremos el servidor con la configuración previa*/
app.listen((3000), () => console.log("Servidor corriendo en puerto 3000"));




// /* Middleware */
// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, privateToken, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };