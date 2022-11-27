class ServerError extends Error {
  constructor() {
    super(`An internal error ocurred`);
    this.name = "ServerError";
  }
}

module.exports = ServerError;
