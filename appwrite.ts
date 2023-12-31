import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client();
// 651dce21675984b05f7a
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);


export {
    client,
    account,
    databases,
    storage,
    ID
}
