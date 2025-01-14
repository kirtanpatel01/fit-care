const asyncHandler = (requestHanlder) => {
    return (req, res, next) => {
        // console.log("asyncHandler", req.files)ww
        Promise.resolve(requestHanlder(req, res, next)).catch((error) => next(error))
    }
}

export { asyncHandler };