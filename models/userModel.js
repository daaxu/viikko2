// ./models/userModel.js
'use strict';
const pool = require('../database/db');
const { param } = require('../routes/userRoute');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_user');
    return rows;
  } catch (e) {
    console.log('userModel error', e.message);
  }   
};

const getUser = async (id) => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_user WHERE user_id = ?',[id]);
    return rows;
  } catch (e) {
    console.log('userModel error', e.message);
    return {error: 'DB error'};
  } 
};

const adduser = async (id) => {
  try {
    const [rows] = await promisePool.execute('INSERT INTO wop_user (name, email, password) VALUES (?,?,?)', params);
    return rows;
  } catch (e) {
    console.log('userModel error', e.message);
    return {error: 'DB error'};
  } 
};


module.exports = {
  getAllUsers,
  getUser,
};