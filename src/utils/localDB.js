/**
 * Utility functions for IndexedDB operations
 *
 * Opens or create a connection to an IndexedDB database.
 *
 * @returns {Promise<IDBDatabase>} A promise that resolves with the database instance.
 *
 * @throws {DOMException} If there is an error opening the database.
 *
 * @example
 * openDB()
 *   .then(db => {
 *     // Use the database instance
 *   })
 *   .catch(error => {
 *     console.error('Failed to open database:', error);
 *   });
 */

// Define the database name and store name
const DB_NAME = "QuizHistoryDB";
const STORE_NAME = "quizAttempts";

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    // Resolve the promise with the database instance
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Save a quiz attempt to IndexedDB
export const saveQuizAttempt = async (attempt) => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.add(attempt);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

// Retrieve all quiz attempts from IndexedDB
export const getQuizHistory = async () => {
  const db = await openDB();
  const transaction = db.transaction(STORE_NAME, "readonly");
  const store = transaction.objectStore(STORE_NAME);
  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};
