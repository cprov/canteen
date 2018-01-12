Canteen is a minimalist python (flask) web application setup using React.

Setup
-----

Install `nvm` following https://github.com/creationix/nvm#install-script, then:

    $ nvm install --lts
    ...
    $ npm install --prefix static
    ...

Build react assets:

    $ npm run --prefix static build
    ...

Install python dependencies:

    $ virtualenv -p python3 env
    ...
    $ pip install -r requirements.txt
    ...

Run the web application:

    $ talisker --reload canteen.app:app
    ...
