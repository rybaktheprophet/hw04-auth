class AppError extends Error {
  constructor(status, messege) {
    super(messege);
    this.status = status;
  }
}

module.exports = {
  AppError,
};
