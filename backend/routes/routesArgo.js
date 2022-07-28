const express = require('express');
const router = express.Router();

const Argo = require('../argonautes.model');

router.get('/test', (req, res) => res.send('argo route testing!'));

router.get('/', (req, res) => {
  Argo.find()
    .then(argos => res.json(argos))
    .catch(err => res.status(404).json(err));
});

router.post('/', (req, res) => {
    let argo = new Argo(req.body)
    argo.save()
    .then(argo => res.json({ msg: 'argo added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this argo' }));
});
// router.post("/", async (req, res) => {
//   const argo = req.body;
//   const newArgo = new Argo(argo);
//   await newArgo.save();

//   res.json(argo);
// });


module.exports = router;