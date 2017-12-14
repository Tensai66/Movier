var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://cgybrlmjmhljzg:92611d7a3695c9f91759b05b8cd8f6f8553b89e26e204622a914d3f6de46c3d8@ec2-54-221-204-161.compute-1.amazonaws.com:5432/de918ci53rf0i0' || 'postgres://localhost:5432/users';
var db = pgp(connectionString);

function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then(function(data) {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved All Users'
      });
    }).catch(function(err) {
      return next(err)
  });
}

function signIn(req, res, next) {
  db.one('select * from users where email=${email} and password=${password}', req.body)
  .then(function (data) {
  res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'Retrieved ONE User'
    });
  })
  .catch(function (err) {
    return next(err);
  });
}

function createUser(req, res, next) {
  req.body.email = req.body.email.toLowerCase();
  db.one('insert into users(name, password, email)' + 'values(${name}, ${password}, ${email}) returning id', req.body).then(function(data) {
    res.status(200).json({ status: 'success', message: "New user created", id: data.id});
  }).catch(function(err) {
    res.status(500).json({error: err.detail});
  })
}

function addFavorite(req, res, next) {
  db.one('insert into favorites(movie_id, user_id, title, poster_path, release_date, vote_average, overview)' +
  'values(${movie_id}, ${user_id}, ${title}, ${poster_path}, ${release_date}, ${vote_average}, ${overview}) returning id', req.body)
  .then(function(data) {
    res.status(200).json({ status: 'success', message: "Movie was added to favorites", id: data.id});
  }).catch(function(err) {
    next(err);
  })
}

function getAllFavorites(req, res, next) {
  var user_id = parseInt(req.params.id);
  db.any('select * from favorites where user_id=$1', user_id)
  .then(function(data) {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Retrieved All favorites'
    });
  })
  .catch(function(err) {
    return next(err);
  });
}

function deleteFavorite(req, res, next) {
  var movie_id = parseInt(req.params.movie_id);
  var user_id = parseInt(req.params.id);
  db.result('delete from favorites where user_id = $1 and movie_id = $2', [user_id, movie_id]).then(function(result) {
    res.status(200)
    .json({status: 'success', message: `${result.rowCount} row was deleted.`})
  })
  .catch(function(err) {
    return next(err);
  })
}

module.exports = {
  getAllUsers: getAllUsers,
  signIn: signIn,
  createUser: createUser,
  getAllFavorites: getAllFavorites,
  addFavorite: addFavorite,
  deleteFavorite: deleteFavorite
};
