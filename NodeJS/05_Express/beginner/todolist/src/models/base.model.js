module.exports = class BaseModel {
  constructor(db) {
    this.setDB(db);
    // Array to mimic database storage
    this._collection = [];
  }
  setDB(db) {
    this.db = db;
  }
  collection() {
    if (this._collection) return this._collection;
    return (this._collection = []);
  }
};
