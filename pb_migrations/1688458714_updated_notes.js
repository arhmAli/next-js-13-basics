migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xctos3wwxtmvucw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymjobzf1",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ji92gwxi",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xctos3wwxtmvucw")

  // remove
  collection.schema.removeField("ymjobzf1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ji92gwxi",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
