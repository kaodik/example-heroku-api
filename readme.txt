
This is the barebones of a herkoku node, express, cores, api app

take clone and create heroku app add prostgres addon to targeted heroku app join heroku with git type this command in terminal: "heroku git:remote -a projectname" git add . git commit -m "this is the commit message" git push heroku master heroku open

now you should at least see something. If not something else is wrong. Such as The data base is empty. run in terminal: heroku logs --tail -a example-app that command should show the events and errors of what had occured.
