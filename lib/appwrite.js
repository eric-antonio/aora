import {
  Account,
  AppwriteException,
  Avatars,
  Client,
  Databases,
  ID,
  Storage,
  Query,
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
const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId,
} = config;

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

    if (!newAccount) throw new Error("Failed to create your account");

    const avatarUrl = await avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    let session;
    try {
      session = await account.get();
      console.log("Active session found:", session);

      return session;
    } catch (error) {
      console.log("No active session found:", error);
    }

    session = await account.createSession(email, password);
    console.log("New session created:", session);
    return session;
  } catch (error) {
    console.error("Error signing in:", error);
    throw new Error("Failed to sign in");
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw new Error("No user found");

    // const currentUser = await databases.listDocuments(
    //   config.databaseId,
    //   config.userCollectionId,[Query.equal("accountId", currentAccount.$id)]
    // );

    // if (!currentUser) throw new Error("No user found");

    // console.log(currentUser , "aaaa")

    return currentAccount;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId);
    return posts.documents;
  } catch (error) {
    throw new Error(" Failed to get all posts");
  } finally {
  }
};

export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.orderDesc("$createdAt", Query.limit(7)),
    ]);
    return posts.documents;
  } catch (error) {
    throw new Error(" Failed to fetch the latest posts");
  } finally {
  }
};

export const searchPosts = async (query) => {
  try {
    const posts = await databases.listDocuments(databaseId, videoCollectionId, [
      Query.search("title", query),
    ]);
    return posts.documents;
  } catch (error) {
    throw new Error(" Failed to fetch the  search posts");
  } finally {
  }
};
