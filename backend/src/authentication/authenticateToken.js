const jwt = require("jsonwebtoken");

// This function is to be used when the frontend requests private resources from the backend
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];;

    if (!token) {
        return res.status(401).json({ message: "No auth token" });
    }

    // Unencrypts the token from the frontend using the same secret key that it was encrypted with when originally sent to the frontend from login.controller
    jwt.verify(token, process.env.API_SECRET_KEY, (err, decodedToken) => {
        if (err) {
            return res
                .status(401)
                .json({ message: "Unauthorized token" });
        }

        // Stores the user's ID that the token carried so the ID can be used by downstream middleware
        req.user = { personId: decodedToken.personId };
        next();
    });
}

module.exports = authenticateToken;
