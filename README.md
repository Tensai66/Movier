# Movier

  This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api. 
  
  The idea of the project is to be able to sign in as a user and save favorite movies, the user should also be able to search movies and get a response from the API which then shows movie posters, ratings, overview, and most importantly, movie recommendations!

  Here is what you'll need to know to run this LOCALLY. 
  * Using PostgreSQL
  * Setting up steps:
    * `npm install`
    * If you don't have postgresSQl, scroll down to `Setup Postgresql` and follow those steps.
    * Then run `npm run build`
    * Lastly run `npm start`
  * 2 APIs - MovieDB and your very own api
  * Fetch upcoming movies from MovieDB

## Setup Postgresql

#### What is Postgresql?
* PostgreSQL is a powerful, open source object-relational database system

#### Installation:
* Install Homebrew. Homebrew is a package manager for MacOS.
	*  */usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)*
	
* Install Postgresql  
	*  *brew install postgresql*	
	
#### Running Postgres
* Start Postgres  
  * `psql -f ./database/users.sql` will drop and recreate your database. 
	* *postgres -D /usr/local/var/postgres* (You could create an alias for this)
	
#### Press CMD-T to create a new tab in your terminal
* Type *psql*. This will get you into the interactive postgres terminal. From here you can run postgres and sql commands. You might get an error *psql: FATAL: database "username" does not exist* To resolve this error type *createdb 'somthing does not exist'*

#### [PSQL Commands](http://postgresguide.com/utilities/psql.html)

## API
  We used 'fetch' to make all API calls for easy use.

###### Users

 * ##### Sign In `/api/users`
  To sign in you will need to enter in an *email* and *password*.

* ##### Create Account - `/api/users/new`
  Creating an account must have all input fields filled in (name, email, password)
  You must enter all three into the fields. Passwords are case sensitive.

* ##### Add Favorite - `/users/favorites/new`
  To save a favorite you may click the circle icon on a movie. When the circle lights up, that means the movie has been
  favorited. A modal message will also pop up confirming the process.

* ##### Receive All Favorites - `/users/:id/favorites`
  This will return an array favorite objects based on the user's account id.

* ##### Delete a Favorite - `/users/:id/favorites/:favID`
  To delete a favorite you may click the circle icon again. When the circle icon goes gray, that means the movie has been
  unfavorited. A modal message will also pop up confirming the process.

### Iterations

##### Iteration 0: Pull in movie API
  * Pull most recent movies from MovieDB API.
  * Display each movie on root index `/`

##### Iteration 1: Sign In / Sign Out Functionality
  * Be able to sign in on page `/login` and redirect user to `/`
    * Flash "Email and Password do not match" - if password is incorrect
  * Ability to create a user.
    * Flash "Email has already been used" - if email has been taken
  * The user has the ability to sign out. 
  
##### Iteration 2: Favorites
  * Each movie should be displayed with a favorite button.
  * If the user is not signed in and clicks on a favorite button the user will be prompted with the request to create an account.
  * Validate favorites before adding to db. Aka does that user already have the movie stored as favorites. There should be no duplicates. 
  * If the user visits `/favorites` they will be able to see a list of all their favorite movies.
  * The user should be able to delete favorites from `/favorites` or `/`.
  * Favorite movies should have a visual indication on `/`.

Extensions:
  * A user stays signed in after refreshing the page. [COMPLETE]
  * A user can click and view any individual movie. [COMPLETE]
