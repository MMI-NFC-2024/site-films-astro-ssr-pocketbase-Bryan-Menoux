/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1885662682")

  // update collection data
  unmarshal({
    "deleteRule": "@request.auth.id != \"\" && @request.auth.id = user.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1885662682")

  // update collection data
  unmarshal({
    "deleteRule": ""
  }, collection)

  return app.save(collection)
})
