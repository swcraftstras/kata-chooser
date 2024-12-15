# kata-chooser

Choose a kata from filters

## Architecture

This website uses [vanilla JS](https://vanilla.js.org/) and [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
It does not use any build system (such as npm, yarn or deno).

It need nothing to install and you can even develop from your browser directly !

But Why is there some deno stuff ?
Deno is only used for tests and to run a very small server locally (do not import deno stuff in production modules).

## Run locally

If you want to run the server locally, you will need to [install deno](https://docs.deno.com/runtime/).

```shell
deno run --allow-net --allow-read  server.ts
```

## Use of deno for tests

If you want to run tests, you will need to [install deno](https://docs.deno.com/runtime/).

Run tests :

```shell
deno test
# continuously
deno test --watch
```
