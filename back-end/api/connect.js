import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://gustavoguimazotti:9xj7003KfqAr1dWD@cluster0.8fp4s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");


