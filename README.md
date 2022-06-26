# David and Katharina's Wedding Website
The website is hosted on Github Pages. Thank you, Github, for the service.

# Setup

## Nix

I am using Nix to separate my various development environment. To start the development, you have to install Nix. Ensure you are using the `nixpkgs` release 22.05 (must for Apple M1 machines). You can always bump the version using:

```sh
$ nix-shell -p niv --run "niv update nixpkgs -b release-22.05"
```

After reloading the environment, Nix will install `node`.

## NPM

This is a node project, install node dependencies using `npm`:

```sh
$ npm install
```
 
# Development

I am using `11ty` for the static file complilation and `gulp` to build website's assets. To launch a local server and have `gulp` watch changes in the assets, use:

```sh
$ npm run server
```

# License

The template was developed by [FREEHTML5.CO](https://freehtml5.co) distributed under CC BY 3.0.

All photos on the website and text are private property and you are not allowed to copy nor distribute them.

If you like the development setup, I am very happy. Just remove the photos and text (also from Git's history)in case you decide to use the repo as a base for your project. 



