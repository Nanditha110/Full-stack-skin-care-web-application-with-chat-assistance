const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User'); //bring in user model

//@route    POST api/users
//@desc     Register user
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      //Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200', //max size of string
        r: 'pg',
        d: 'mm', //default user
      });
      //new instance created for user
      user = new User({
        name,
        email,
        avatar,
        password, //here the password is still not encrypted
      });

      //Encrypt password

      const salt = await bcrypt.genSalt(10); //create a salt variable and here 10 is no. of rounds
      //(more no. of rouds more it is secure but time taken will increase)
      user.password = await bcrypt.hash(password, salt); // taking password and hashing it

      await user.save(); // save user to the database

      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
