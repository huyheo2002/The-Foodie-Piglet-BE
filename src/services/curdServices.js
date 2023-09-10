import db from '../models';
var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);

const createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashPassword(data.password);
            // console.log("data from services", data)
            // console.log("data from services password", hashPasswordFromBcrypt)
            await db.User.create({                
                name: data.name,
                email: data.email,
                username: data.username,
                password: hashPasswordFromBcrypt,
                phone: data.phone,
                address: data.address,
                gender: data.gender === "1" ? true : false,                
                roleId: data.roleId,                
            })
            resolve("success create user");
        } catch (error) {
            reject(error)
        }
    })
}

const hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPass = await bcrypt.hashSync(password, salt);
            resolve(hashPass);
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createUser: createUser,
} 