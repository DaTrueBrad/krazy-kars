const Kar = require("../models/kars")

module.exports = {
  getAllKars: async (req, res) => {
    try {
      let kars = await Kar.findAll()
      res.status(200).send(kars)
    } catch (error) {
      res.status(400).send(error)
    }
  },
  createKar: async (req, res) => {
    try {
      await Kar.create(req.body)
      res.sendStatus(200)
    } catch (error) {
      res.status(400).send(error)
    }
  }
}