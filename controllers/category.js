import models from '../models'

export default {
    add : async(req, res, next) => {
        try {
            const reg = await models.Category.create(req.body)
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message : "An error ocurred",
            });
            next(e);
        }
    },
    query : async(req, res, next) => {
        try {
            const reg = await models.Category.findOne({_id : req.query.__id});
            if (reg) {
                res.status(200).json(reg)
            } else {
                res.status(404).send({
                    message: "Register dont exists"
                })
            }
        } catch (e) {
            res.status(500).send({
                message : "An error ocurred",
            });
            next(e);
        }
    },
    list : async(req, res, next) => {
        try {
            const reg = await models.Category.find({})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message : "An error ocurred",
            });
            next(e);
        }
    },
    update : async(req, res, next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id : req.body._id}, {name : req.body.nombre, desciption : req.body.desciption})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message : "An error ocurred",
            });
            next(e);
        }
    },
    remove : async(req, res, next) => {
        try {
            const reg = await models.Category.findByIdAndDelete({_id: req.body._id})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message : "An error ocurred",
            });
            next(e);
        }
    },
    activate : async(req, res, next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id: req.body._id} , {status: 1})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message : "An error ocurred",
            });
            next(e);
        }
    },
    deactivate : async(req, res, next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id: req.body._id} , {status: 0})
            res.status(200).json(reg)
        } catch (e) {
            res.status(500).send({
                message : "An error ocurred",
            });
            next(e);
        }
    },

}