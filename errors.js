class InternalServerError extends Error {
  STATUS = 500;

  constructor(message) {
    super(message);
  }
}

class BadRequestError extends Error {
  STATUS = 400;

  constructor(message) {
    super(message);
  }
}

class NotFoundError extends Error {
  STATUS = 404;

  constructor(message) {
    super(message);
  }
}

module.exports = {
  InternalServerError,
  BadRequestError,
  NotFoundError,
};
