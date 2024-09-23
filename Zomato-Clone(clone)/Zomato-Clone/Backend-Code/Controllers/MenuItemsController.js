

const Menuitems = require('../Models/Menumodel');

exports.getMenuItemsByRestaurant = async(req, res) => {
    const result = await Menuitems.find({restaurant_id : req.params._id});
    try{
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }
}

