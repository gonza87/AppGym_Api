const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    console.log(token);
    
    if(!token || token !== process.env.AUTH_SECRET_KEY){
        res.status(401).json({
            message: "Unauthorized - Invalid token provided"
        });
        return;
    }
    next();
}

module.exports = authMiddleware;