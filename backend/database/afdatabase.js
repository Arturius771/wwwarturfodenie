import { MongoClient, ServerApiVersion } from "mongodb";

export class AFDatabase {
  constructor() {}
  async insert(document) {
    const credentials = "./X509-cert-3730141064141644294.pem";

    const client = new MongoClient(
      "mongodb+srv://cluster0.xydbj.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
      {
        sslKey: credentials,
        sslCert: credentials,
        serverApi: ServerApiVersion.v1,
      }
    );
    try {
      const database = client.db("afdb");
      const modules = database.collection("modules");
      const result = await modules.insertOne(document);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  }
}
