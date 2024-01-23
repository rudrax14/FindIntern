class AppError {
    constructor(message,statusCode){
        this.message=message
        this.statusCode=statusCode
        this.status='Fail'
        this.isOperational = true
    }
    

}

module.exports = AppError