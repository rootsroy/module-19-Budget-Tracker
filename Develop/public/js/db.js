let db;

const connection = indexedDB.open("budget_tracker", 1);

connection.onupgradeneeded = function (event) {
  const dbRef = event.target.result;
  dbRef.createObjectStore("transactions", { autoIncrement: true });
};

connection.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    uploadTrans();
  }
};

connection.onerror = function (event) {
  console.log(event.target.errorCode);
};

const saveRecord = (record) => {
  const transaction = db.transaction(["transactions"], "readwrite");
  const storage = transaction.objectStore("transactions");
  storage.add(record);
};

const uploadTrans = () => {
  const transaction = db.transaction(["transactions"], "readwrite");
  const storage = transaction.objectStore("transactions");

  const getAll = storage.getAll();

  getAll.onsuccess = function () {
    // if data exists, send to api server
    if (getAll.result.length > 0) {
      fetch("/api/transaction", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((serverResponse) => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }

          const transaction = db.transaction(["transactions"], "readwrite");
          const storage = transaction.objectStore("transactions");
          storage.clear();

          alert("All saved transactions have been submitted!");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};

// listen for app coming back online
window.addEventListener("online", uploadTrans);
