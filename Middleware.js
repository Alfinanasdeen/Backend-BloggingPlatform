import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(401).send("Access Denied. No Token Provided.");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trim();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log("Verifird user", req.user);
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const authorizeRoles = (roles) => {
  return (req, res, next) => {
    console.log("User Role:", req.user.role);
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access Denied: Insufficient Permissions" });
    }
    next();
  };
};
