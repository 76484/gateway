function HttpError(message: string) {
  this.message = message;
  this.code = 500;
}

export { HttpError };
