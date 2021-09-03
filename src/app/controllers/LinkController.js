const Link = require('../models/Link')
const generateCode = require('../utils/generateCode')
const sequelize = require("../../database/index");

class LinkController {
  async encode(req, res) {
    const { url } = req.body

    if (!url) return res.status(400).send({ error: 'url was not provided' })

    const link = await Link.findOne({ where: { url } })

    if (link) return res.status(200).send({ code: link.code })

    try {
      const result = await sequelize.transaction(async (t) => {
        
      const code = generateCode()
      const newLink = await Link.create({
        url,
        code,
      })

      return res.status(201).send({ code: code })
      
      });
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }

  async decode(req, res) {
    const { code } = req.params

    if (!code) return res.status(400).send({ error:'code was not provided' })

    try {
      const result = await sequelize.transaction(async (t) => {
      
      const link = await Link.findOne({ where: { code } })

      if (!link) return res.status(404).send()

      link.clicks += 1
      await link.save()
      
      return res.status(200).send({ url: link.url })
      
      });
    } catch (err) {
      return res.status(500).send(err.message)
    }
  }

  async getClicksLink(req, res) {
    const { id } = req.params

    if (!id) return res.status(400).send({ error:'id was not provided' })

    try {
      const link = await Link.findOne({ where: { id } })

      if (!link) return res.status(404).send()

      return res.status(200).send({ clicks: link.clicks })

    } catch (err) {
      return res.status(500).send(err.message)
    }
  }
}

module.exports = new LinkController()
