import models from '../models'

export default {
    add : async(req, res, next) => {
        try {
            const reg = await models.Category.create(req.query)
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
            const reg = await models.Category.findOne({_id : req.query._id});
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
            let value = req.query.value;
            //Filter and Sort
            const reg = await models.Category.find(
                {$or:[{'name': new RegExp(value, 'i')} , {'description':new RegExp(value, 'i')}]}
                ,{createdAt:0}) // {},{showField:1, hideField:0}
            .sort({'createdAt':-1}) //Descendent filter -1/ Ascendent 1
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
            console.log(req.body);
            const reg = await models.Category.findByIdAndUpdate({_id : req.body._id}, {name : req.body.name, description : req.body.description})
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