export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode, (error.message = statusCode), message;
  return error;
};
