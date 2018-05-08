lit-element-build-example
====================

This is a demo of a simple webpack based build process that builds and bundles a [LitElement]() component for use in older browsers like IE11.

To run the build:

```
$ npm install # only the first time
$ npm run webpack
```

The transpiled and bundled code will be placed in `demo/dist`. Run a web server and load `demo/index.html` in IE11, or another older browser. It works! (Hopefully.)

### Prior art

* [polymer3-webpack-starter-kit build scripts](https://github.com/Dabolus/polymer3-webpack-starter-kit)
* [material-components-web-components build scripts](https://github.com/material-components/material-components-web-components)

### License (MIT)

Copyright 2018 David R. Leonard

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
