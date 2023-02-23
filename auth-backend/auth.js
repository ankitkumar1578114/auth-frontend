const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  "244695757173-q8p1fdj9dohmfg0s066ie0fik88chbpo.apps.googleusercontent.com"
);
const verify = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "244695757173-q8p1fdj9dohmfg0s066ie0fik88chbpo.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();
    const userid = payload["name"];
    console.log("everything is okay");
    next();
  } catch {
    (err) => console.log(err);
  }
};

module.exports = verify;
