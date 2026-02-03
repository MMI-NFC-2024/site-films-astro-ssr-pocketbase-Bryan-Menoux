/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2710985927",
    "max": "",
    "min": "",
    "name": "date_de_naissance",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2710985927",
    "max": "",
    "min": "",
    "name": "date_de_naissance",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
