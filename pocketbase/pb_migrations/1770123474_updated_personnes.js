/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select538773205",
    "maxSelect": 1,
    "name": "nationnalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "ES",
      "GB",
      "US",
      "DE"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // remove field
  collection.fields.removeById("select538773205")

  return app.save(collection)
})
