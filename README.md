# Setup

  $ virtualenv -p python3 env
  ...
  $ pip install -r requirements.txt
  ...

Install `nvm` following https://github.com/creationix/nvm#install-script, then::

  $ nvm install --lts
  ...
  $ npm install
  ...
  $ npm run --prefix static build
  ...

Run the web application::

  $ talisker --reload canteen.app:app
