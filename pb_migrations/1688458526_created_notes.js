migrate((db) => {
  const collection = new Collection({
    "id": "xctos3wwxtmvucw",
    "created": "2023-07-04 08:15:26.612Z",
    "updated": "2023-07-04 08:15:26.612Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xctos3wwxtmvucw");

  return dao.deleteCollection(collection);
})
