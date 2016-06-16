[![power-assert][power-assert-banner]][power-assert-url]

[![NPM version][npm-image]][npm-url]


`lab-espower-transformer` is a [Lab](https://github.com/hapijs/lab) transformer to enable [power-assert](https://github.com/power-assert-js/power-assert).


INSTALL
---------------------------------------

```
$ npm install --save-dev lab-espower-transformer
```


HOW TO USE
---------------------------------------

In your Lab command line or in your `package.json`, add the file as a transformer:

```
$ lab -T node_modules/lab-espower-transformer
```

```javascript
{
  "scripts": {
    "test": "lab -T node_modules/lab-espower-transformer"
  }
}
```

AUTHOR
---------------------------------------
* [Feugy](http://feugy.github.io)


LICENSE
---------------------------------------
Licensed under the MIT license.


[power-assert-url]: https://github.com/power-assert-js/power-assert
[power-assert-banner]: https://raw.githubusercontent.com/power-assert-js/power-assert-js-logo/master/banner/banner-official-fullcolor.png

[npm-url]: https://npmjs.org/package/lab-espower-transformer
[npm-image]: https://badge.fury.io/js/lab-espower-transformer.svg
