function initdb() {

    let db;
    // open index db. open ()
    const request = window.indexedDB.open("ToDoDB", 1);  // IDBOpenDBRequest

    // upgrading if needed 
    request.onupgradeneeded = function(event){
        let db = event.target.result; // which is IDBOpenDBRequest.result

        // Create an object for this database
        let objectStore = db.createObjectStore("name", { keyPath: "myKey" });
    }
    request.onerror = function (event) {
        alert("Why didn't you allow my web app to use IndexedDB?!");
        alert("Database error: " + event.target.errorCode);
      };
    request.onsuccess = function (event) {
        db = request.result;
      };
}