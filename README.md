# ⛅️  CloudFunc

a [TypeScript](http://www.typescriptlang.org/) starter function for [Firebase](https://firebase.google.com/docs/functions/)/[Google Compute Platform](https://cloud.google.com/functions/).

[![Build Status](https://travis-ci.org/damienstanton/cloudfunc.svg?branch=master)](https://travis-ci.org/damienstanton/cloudfunc)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

**Why?**

I found that getting started with a TS function in GCF was more difficult than it should be. I was able to piece together a working example based on the official repo and a couple blog posts. This ia an attempt at a better kit that I can reach for anytime I want to _quickly_ get started on a new function.

**Features:**

- No gloabl dependencies needed. Just run `yarn install` in the functions directory and you're ready.
- CI tests against a real-life deployed instance ensure the starter kit currently works

**Commands:**

From the `functions` directory:

Compile once:
```
$ yarn build
```
Hot reload:
```
$ yarn watch
```
Run tests:
```
$ yarn test
```
Deploy to GCF:
```
$ yarn deploy
```

[![donation](https://img.shields.io/badge/☕️-Buy_me_coffee-green.svg)](https://paypal.me/damienstanton) 

© 2017 Damien Stanton

See LICENSE for details.
