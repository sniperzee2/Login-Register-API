const express = require('express');
const router = express.Router();
const authController = require('../controller/authController')
/**
  * @swagger
  * tags:
  *   name: Login Register
  *   description: API
*/
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email of user
 *         password:
 *           type: string
 *           description: Password of user
 *       example:
 *         "email": "example@gmail.com"
 *         "password": "123456"
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Some error
 */
router.post('/register', authController.register)
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Logged In successfully
 *       400:
 *         description: Some error
 */
router.post('/login', authController.login)

module.exports = router;
