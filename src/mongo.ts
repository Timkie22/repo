// db.ts
import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

async function connect() {
  try {
    const options: MongoClientOptions = {
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(uri, options);
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    throw error;
  }
}

export default connect;