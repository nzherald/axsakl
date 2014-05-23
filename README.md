AxsAkl
======

A Rails app built during [HackAKL](http://hackakl.org.nz) to map access to Public Transport.


#### Getting going

You will need Ruby, preferably Ruby 2.0.0 or higher.

Check which you have Ruby installed with ``ruby --version``

You will also need the bundler gem.


Run `bundle --help` to see if you already have it. Otherwise `gem
install bundler`



You will also need Postgresql and PostGIS. The easiest way to install
these on Mac OS X is using [homebrew](http://brew.sh/).

With homebrew installed, run

`brew install postgresql` and

`brew install postgis`


To run the Rails app:

1. Clone the git repo

2. `bundle install` to pull down the gems in the Gemfile

3. `rake db:setup` to create the database and run the
   migrations

4. `rails s`


Periodically you may need to run

`rake db:migrate` to update the database schema.
