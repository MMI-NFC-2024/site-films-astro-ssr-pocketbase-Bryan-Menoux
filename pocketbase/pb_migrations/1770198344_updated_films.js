/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1335826611",
    "hidden": false,
    "id": "relation1200832254",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "realisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1335826611",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "producteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1335826611",
    "hidden": false,
    "id": "relation3942306658",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "acteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("relation1200832254")

  // remove field
  collection.fields.removeById("relation2128342544")

  // remove field
  collection.fields.removeById("relation3942306658")

  return app.save(collection)
})
