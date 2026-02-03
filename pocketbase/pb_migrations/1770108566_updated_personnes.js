/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 6,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "réalisateur",
      "réalisatrice",
      "producteur",
      "productrice",
      "acteur",
      "actrice",
      "scénariste"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1335826611")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 6,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "réalisateur",
      "réalisatrice",
      "producteur",
      "productrice",
      "acteur",
      "actrice"
    ]
  }))

  return app.save(collection)
})
