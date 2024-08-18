import {
  Account,
  AppwriteException,
  Avatars,
  Client,
  Databases,
  ID,
  Storage,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.eric.aora",
  projectId: "66c09651002b8236cf65",
  databaseId: "66c1f8dd003bd2ec3a8c",
  userCollectionId: "66c1f9cc00149c04dbc3",
  videoCollectionId: "66c1f9ff00276713deb1",
  storageId: "66c1fc5100070de2a4f4",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storages = new Storage(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error("Failed to create  your account");

    const avatarUrl = await avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        account: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
    
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a new user");
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    throw new Error("Failed to sign in");
  }
}
