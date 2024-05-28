// src/utils/indexedDB.js

import { openDB } from 'idb';

const DB_NAME = 'ordersDB';
const STORE_NAME = 'orders';

const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
};

export const addItem = async (item) => {
  const db = await initDB();
  return db.put(STORE_NAME, item);
};

export const getItems = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const deleteItem = async (id) => {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
};

export const updateItem = async (item) => {
  const db = await initDB();
  return db.put(STORE_NAME, item);
};
