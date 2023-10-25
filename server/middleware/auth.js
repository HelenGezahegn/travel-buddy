import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    // front-end sets this header, and we're grabbing it throuth this key
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      // 7 based on Bearer length
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
