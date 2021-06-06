const admin = require("firebase-admin");

exports.deleteUser = (req, res, next) => {
  const userUID = req.params.userUID;

  admin
    .auth()
    .deleteUser(userUID)
    .then(() => {
      res.status(200).json({
        message: "Berhasil menghapus user.",
        error: false,
        success: true,
      });
    })
    .catch((err) => {
      res.status(303).json({
        message: "Oops, terjadi kesalahan",
        error: true,
        success: false,
        errors: err,
      });
    });
};
