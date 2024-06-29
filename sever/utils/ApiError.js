class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong"
    ) {
        super(message, statusCode)
        this.statusCode = statusCode;
        this.message = message;
        this.success = false
    }
}

export { ApiError }