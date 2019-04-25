require('dotenv').config();
const passport = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const { hashPasswordWithSalt, hashPassword, genAccessToken } = require('./_auth');
const cassandra = require('../cassandra');

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (req, email, password, next) => {
    try {
/*      const inputData = req.body;
      let user = await usuario.findOne({ email: email });
      if (!user) return next(null, false, { message: 'Email não cadastrado.' });

  		let hashedPassword = hashPasswordWithSalt(password, user.salt).hash;
  		if (user.hash != hashedPassword) return next(null, false, { message: 'Senha incorreta.' });
  		return next(null, user, { message: 'Sessão iniciada com sucesso.' });*/
    } catch(err) {
      next(err);
    }
  }
));

passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    ignoreExpiration: true,
    passReqToCallback: true
  },
  async (req, jwtPayload, next) => {
    try {
      let user = await usuario.findOne({ _id: jwtPayload.id, refreshTokens: jwtPayload.refreshToken });
      if (!user) next(null, false, { message: 'Autenticação falhou.' });

      let accessToken = req.headers['authorization'].split(' ')[1];
      jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err == 'TokenExpiredError') {
          accessToken = genAccessToken(user, jwtPayload.refreshToken);
        }
        return next(null, user, { refreshToken: jwtPayload.refreshToken, accessToken: accessToken });
      });
      
    } catch(err) {
      return next(err);
    }

  }
));

module.exports = passport;