class AppError  {
    message;
    statusCode;

    constructor(message, statusCode = 400){
        this.message = message;
        this.StatusCode = statusCode;
    }
}
module.exports = AppError;