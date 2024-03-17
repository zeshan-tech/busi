import { Client, Account } from "appwrite";

export const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65f65aa42c76d0464ce7");

export const account = new Account(client);
export { ID } from "appwrite";
