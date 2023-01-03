const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://ArturFoden1:EjerVgMV4G2e@cluster0.xydbj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log(client);
  // perform actions on the collection object
  client.close();
});
