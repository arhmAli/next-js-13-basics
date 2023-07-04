migrate((db) => {
  const collection = new Collection({
    "id": "anemg65x7gvm2oj",
    "created": "2023-07-03 16:34:28.015Z",
    "updated": "2023-07-03 16:34:28.015Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pr13czbm",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("anemg65x7gvm2oj");

  return dao.deleteCollection(collection);
})
