const { request } = require('express');

const getUsers = (req = request, res) => {

    const params = req.query;
    console.log(params);
    res.json({
        ok:true, 
        message:"Get users successful",
    });
}
const putUsers = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true, 
        message: "Put users successful",
        id,
    });
}
const postUsers = (req, res) => {
    res.json({
        ok: true,
        message: "Post users successful",
    });
}
const deleteUser = (req, res) => {
    res.json({
        ok: true, 
        message: "User has be eliminated",
    });
}
module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUser,
}