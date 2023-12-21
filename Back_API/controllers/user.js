const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.createUser = (req, res) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                creationDate: new Date(),
                modificationDate: new Date(),
                creationUser: 'admin',  
                modificationUser: 'admin',
                active: true
            });


            user.save().then((savedUser) => {
                res.status(200).json({ "message": "Création de User bien réalisée", "user": savedUser });
            }).catch((err) => {
                res.status(405).json({ "message": "Erreur lors de la création de User, vérifier le body", "err": err });
            });
        }).catch((err) => {
            res.status(500).json({ "message": "Erreur lors du chiffrement, vérifier le body", "err": err });
        })
}

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (valid) {
                        const token = jwt.sign({ user: user }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
                        res.status(200).json({ token: token, email: user.email, name: user.name });
                    } else {
                        res.status(401).json({ "message": "Bad credentials" });
                    }
                })
                .catch((err) => {
                    res.status(500).json({ "message": "Error with bcrypt ", "err": err });
                })


        }).catch(() => {
            res.status(404).json({ "message": "User not found" });
        })
}

exports.getUser = (req, res) => {
    const id = req.params.id;

    User.findById(id).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(404).json({ "message": "Pas de User trouvé pour cet id", "err": err });
    });
}

exports.updateUser = (req, res) => {
    const id = req.params.id;

    req.body.modificationDate = new Date();
    User.updateOne({ _id: id }, req.body).then((updatedUser) => {
        res.status(200).json({ "message": "Modification de User bien réalisée", "user": updatedUser });
    }).catch((err) => {
        res.status(405).json({ "message": "Erreur lors de la modification de User, vérifier le body", "err": err });
    });
}

exports.deleteUser = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id).then((result) => {
        if (result) {
            res.status(200).json({ "message": "Suppression de User bien réalisée" });
        } else {
            res.status(404).json({ "message": "Ce user n'existe pas" });
        }
    }).catch((err) => {
        res.status(404).json({ "message": "Erreur lors de la suppression de User", "err": err });
    });
}


//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1NmUwN2FlZmZkMzQ1ZGNiYzExZTJjMSIsIm5hbWUiOiJwYXVsIiwiZW1haWwiOiJwYXVsLnBpYXVnZXIyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJG95UWRMeUF0aVJDYzNhcUdMUE1aTC53YVFvdjhvVDJhWFZHNVJZRzROeFlrNmN5bktKSWhTIiwiY3JlYXRpb25EYXRlIjoiMjAyMy0xMi0wNFQxNzowOTowMi45ODNaIiwibW9kaWZpY2F0aW9uRGF0ZSI6IjIwMjMtMTItMDRUMTc6MDk6MDIuOTgzWiIsImNyZWF0aW9uVXNlciI6ImFkbWluIiwibW9kaWZpY2F0aW9uVXNlciI6ImFkbWluIiwiYWN0aXZlIjp0cnVlLCJfX3YiOjB9LCJpYXQiOjE3MDE3MTMyNjcsImV4cCI6MTcwMTc5OTY2N30.zyI9KDvWFv_cgovBpFXGyUL33ggEZFG6oriwVKWCJ_A"