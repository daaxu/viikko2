// Controller
'use strict';
const userModel = require('../models/userModel');


const users = userModel.users;

const user_list_get = (req, res) => {
  users.map(usr => delete usr.password);
  res.json(newUsers);
};

const user_get = (req, res) => {
  const id = req.params.id;
  const user = users.filter(usr => usr.id === id).pop();
  delete user.password;
  res.json(user);
};

module.exports = {
  user_list_get,
  user_get,
};