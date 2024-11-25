import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  console.log("token")
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    next("Authentication== failed");
  }

  const token = authHeader?.split(" ")[1];

  console.log(token)

  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    console.log(error);
    next("Authentication failed");
  }
};

// Middleware pour vérifier si l'utilisateur est admin
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.accountType === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Accès refusé. Admin uniquement." });
  }
};


export default userAuth;
