/**
 * Initiation de Express
 */

let express = require('express')
let app = express()


/**
 * Modules de Securité d'une API (logs, XSS securité etc...)
 */
let cors = require('cors');
let bodyParser = require('body-parser');
let logger = require('morgan');
let helmet = require('helmet');
let jwt = require('jsonwebtoken'); // permet de créer un jeton pour l'utilisateur 
let expressJwt = require('express-jwt');
let path = require('path');
let gcm = require('node-gcm');
let firebase = require('firebase');


var config = {
    apiKey: "AIzaSyC2QUtWOoPG4xLO0_QCTH8a-9bWDIhr-fk",
    authDomain: "pmecentral.firebaseapp.com",
    databaseURL: "https://pmecentral.firebaseio.com",
    projectId: "pmecentral",
    storageBucket: "pmecentral.appspot.com",
    messagingSenderId: "844917410964"
};
firebase.initializeApp(config);


/**
 * http://www.meanjs.fr/jwt-lauthentification-avec-token-plutot-quavec-cookie/
 * express-jwt va intercepter toutes les requêtes entrantes, desquelles il va récupérer dans le header 'Authorization: Bearer ...', puis va décoder le token avec le secret. 
 */
let bcrypt = require('bcrypt'); // module pour crypter le mot de passe
let nodemailer = require('nodemailer'); // module pour envoi d'email

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
logger('tiny')
app.use(helmet());


/**
 * Bonus: Nodemailer configuration
 */
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "eccfcf64a912f3",
        pass: "7bef7b105b4c7b"
    }
});

/**
 * Erreur 500 sortie en JSON
 */
app.use(function (error, request, response, next) {
    response.status(error.status || 500);
    response.json({ error: error.message });
});


let sender = new gcm.Sender('AAAAxLkAjJQ:APA91bHO6T39g_CyWaTGjX7_TiN4sAM17MgYoV7K88caYrdUKDdCXtxMsYcgfR70qbvCg51jC_Snndz7Y_H2x93_PeP92_czusgeFcwba31j8pzB6MLPKj5P-r6gTT-fGXUshfwgRCfK');


/**
 *
Un JWT est un objet JSON encodé qu'un serveur (Node par exemple)
 encode en utilisant une clé privée. 

L'objet JSON encodé est un token que vous enverrez à un client qui s'est authentifié avec succès.

 Le client l'enverra ensuite au serveur à chaque requête faite à ce même serveur. 
Si en utilisant sa clé privée le serveur parvient à décoder le token, le serveur sait que le client qui a joint ce token est bien celui qu'il est censé être.
 Le serveur pourra alors authoriser le client à accéder aux resources demandées par le client.
 
 */
let secret = 'q5f6ds465sdfg4v6466f15sdf56sd1f56s165f1sd65f156s16sfdfdf4d6f4s6$5ndjwk';

//app.use('/', expressJwt({ secret: secret })); signé par le token




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/addToken', (req, res) => {
    let token = req.body.token;
    console.log(token);
    let data = { token: token, created: Date.now() };
    firebase.database().ref('0/go/tokens/' + Date.now()).set(data);
    res.json(true);
});

app.post('/newGo', (req, res) => {

    // Prepare a message to be sent 
    let message = new gcm.Message({
        contentAvailable: true,
        priority: 'high',
        collapseKey: 'go',
        data: { title: req.body.title, content: req.body.content }
    });

    var tokens = firebase.database().ref('0/go/tokens');
    let regTokens = [];

    tokens.on('value', function (snapshot) {
        var item = snapshot.val();
        for (it in item) {
            regTokens.push(item[it].token);
        }


        // Specify which registration IDs to deliver the message to 
        // let regTokens = [
        //     'dmr4MF3VJGI:APA91bFMrx3AESTKw9R8GuJr8IdnNX5F3QGc7sbjyYBG4vRKAFTzvOhv-2FTMTZkKfOnJmc3qVW0YLKH2dc_sH81dwY8KWwNwZ8DJ3JdyOwGh0gIrd3lPoF35zAPmz-b_r19Is-LGDvJ',
        //     'cEINmTXlufc:APA91bEipz-ZTIemaXSLygdhaSCrekZCEiqhsvp0DqX6JPQj-kNOeS3-ymBkhY9lWposlzEz0w01vsBUFgBxrJGtkKyVAmOfhLQ2lVMke238eSVy7M-4Ot3KMOQ0F3HHcvAAJ9YBxj-n',
        //     'cmJp1ahN9EM:APA91bF3qkLvLDhE7zb8A8Iw4fgsLYOvi74Qb7mVvbbZPB7_lCiUDRVnlppWSgxKaX8fIQQMWKeTWxToIdvL5zg0yP_obpSoWMB2AYG0-g1D69OXpuSWvjAaq4lemZwMwZRJpyCmSdk6',
        //     'dWq-w9Pbhk0:APA91bE9MyN5Zh6rv6Md_PhdYblOD8F_ojb6NorcyE4-dax3He1Xa5ULL5j3hq7LKnAQ3czSke5Jhpg1D3NkuwotN9YG3ZlWb1EahqT90QFSto1bHowEY6PDOyTQt_IYGLBSo5A9APVI'];

        // Actually send the message 
        sender.send(message, { registrationTokens: regTokens }, (err, response) => {
            if (err) console.error(err);
            console.log(response);
            res.json(true)
        });

    });


});




app.listen(3001, function () {
    console.log('Listened on port 3001!')
})