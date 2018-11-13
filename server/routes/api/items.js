const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()


// Get items
router.get('/', async (req, res) => {
    const items = await loadItemsCollection()
    res.send(await items.find({}).toArray())
})

// Add items
router.post('/', async (req, res) => {
    const items = await loadItemsCollection()
    await items.insertOne({
        title: req.body.title,
        checked: false,
        createdAt: new Date()
    })
    res.status(201).send()
})

// Delete Item

router.delete('/:id', async (req, res) => {
    const items = await loadItemsCollection()
    await items.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send()
})

// Modify Item

router.put('/:id', async (req, res) => {
    const items = await loadItemsCollection()
    console.log(req.body);
    await items.updateOne( { _id: req.body.id }, { $set: {
        "checked": req.body.checked
    }})
    await console.log(res);
    res.status(200).send()
})

async function loadItemsCollection() {
    const client = await mongodb.MongoClient.connect
    (process.env.MONGO_API, {useNewUrlParser: true})
    return client.db(process.env.MONGO_DB_NAME).collection('items')
}

module.exports = router

