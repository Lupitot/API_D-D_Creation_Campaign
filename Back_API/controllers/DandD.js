const DandD = require('../models/DandD');
const logger = require('../logger');
console.log('test4');
exports.createCampagne = (req, res) => {
    let dandD = new DandD({
        name_of_campagne: req.body.name_of_campagne,
        name_of_world: req.body.name_of_world,
        difficulty: req.body.difficulty,
        pitch: req.body.pitch,
        number_of_player_recomended: req.body.number_of_player_recomended,
        importants_place: req.body.importants_place,
        monster_list: req.body.monster_list,
        creationDate: new Date(),
        modificationDate: new Date(),
        creationUser: 'admin',
        modificationUser: 'admin',
        active: true
    });

    dandD.save().then((savedDandD) => {
        res.status(200).json({ "message": "Création d'une campagne bien réalisée", "campagne": savedDandD });
        logger.info({ message: savedDandD.name + ' bien créé'});
    }).catch((err) => {
        logger.error({ message: 'Erreur à la création de la campagne '});
        res.status(405).json({ "message": "Erreur lors de la création de la campagne, vérifier le body", "err": err });
    });
}

exports.getDandD = (req, res) => {
    console.log('test');
    const id = req.params.id;

    DandD.findById(id).then((dandD) => {
        logger.info({ message: dandD.name_of_campagne + ' bien renvoyé'});
        res.status(200).json(dandD);
    }).catch((err) => {
        logger.error({ message: id + ' introuvable'});
        res.status(404).json({ "message": "Pas de campagne trouvé pour cet id", "err": err });
    });
}

exports.updateDandD = (req, res) => {
    const id = req.params.id;

    req.body.modificationDate = new Date();
    DandD.updateOne({ _id: id }, req.body).then((updatedDandD) => {
        if (updatedDandD) {
            logger.info({ message: id + ' bien mis à jour'});
            res.status(200).json({ "message": "Modification de la campagne bien réalisée", "campagne": updatedDandD });
        } else {
            logger.error({ message: id + ' introuvable (modification)'});
            res.status(405).json({ "message": "Erreur lors de la modification de la campagne, vérifier le body", "err": err });
        }
    }).catch((err) => {
        logger.error({ message: 'Erreur lors de la modification de ' + id});
        res.status(405).json({ "message": "Erreur lors de la modification de la campagne, vérifier l'id'", "err": err });
    });
}

exports.deleteDandD = (req, res) => {
    const id = req.params.id;

    DandD.findByIdAndDelete(id).then((result) => {
        if (result) {
            logger.info({ message: id + ' bien supprimé'});
            res.status(200).json({ "message": "Suppression de la campagne bien réalisée" });
        } else {
            logger.error({ message: 'Erreur lors de la suppression de  ' + id});
            res.status(404).json({ "message": "Cette campagne n'existe pas" });
        }
    }).catch((err) => {
        res.status(404).json({ "message": "Erreur lors de la suppression de la campagne", "err": err });
    });
}

exports.getDandDList = (req, res) => {
    DandD.find().then((DandDList) => {
        logger.info({ message: 'Liste de campagne bien retournée'});
        res.status(200).json(DandDList);
    }).catch((err) => {
        logger.error({ message: 'Pas de résultat pour la liste de campagne'});
        res.status(404).json({ "message": "Pas de campagne", "err": err });
    });
}
