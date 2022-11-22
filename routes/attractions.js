const router = require('express').Router();
let Attraction = require('../models/attractions');


router.route('/').get((req, res) => {
  Attraction.find()
    .then(attractions => res.json(attractions))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const location = req.body.location;
  const imageURL = req.body.imageURL


  const newAttraction = new Attraction({name, location, imageURL});


  newAttraction.save()
    .then(() => res.json('Attraction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;