import jwtAction from "../middleware/JwtAction";

const decodeToken = async (req, res) => {
    let accessToken = req.query.accessToken;
    if (!accessToken) {
        return res.status(500).json({
            errCode: 1,
            message: "Missing inputs parameter!"
        })
    }

  let decoded = jwtAction.verifyToken(accessToken) ?? null;

    if (decoded) {
        return res.status(200).json({
            errCode: 0,
            errMsg: "Decoded success",
            decoded: decoded
        })
    } else {
        return res.status(200).json({
            errCode: 2,
            errMsg: "Decoded fail",
        })
    }

}

module.exports = {
  decodeToken: decodeToken,
};
