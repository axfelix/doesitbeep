# Does It Beep?

This is the source for [doesitbeep.com](https://doesitbeep.com). It is heavily borrowed from the source of [docs.shutter.sh](https://docs.shutter.sh/), whom I thank for the inspiration and the help getting started with [eleventy](https://11ty.io/)!

It is a repository of things that beep for no good goddamn reason, so you can avoid them, and help others avoid them.


## Development

First, install the dependencies, as usual:

```sh
npm install
# or
yarn install
```

Now you can start working on the docs:

```sh
# Start a development server that serves the site and reloads it on file change
npm run dev
```

To statically build the site for deployment (you will usually not need to do that manually):

```sh
npm run build
```


## Contributing

Create a pull request. The repository is linked to [netlify](https://netlify.com/), which will automatically add your contribution to the site when the pull request is merged into the `main` branch.
