[![power-assert][power-assert-banner]][power-assert]

[![NPM version][npm-image]][npm]
[![License][license-image]][license]


`lab-espower-transformer` is a [Lab][lab] transformer to enable the powerful [power-assert][power-assert] assertion library.


INSTALL
-------

```
$ npm install --save-dev lab-espower-transformer
```


HOW TO USE
----------

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

CHANGELOG
---------

# 2.0.0
- supports async/await syntax and lab@15. Don't use with lab version >=14


AUTHOR
------

[Feugy][homepage]


LICENSE
-------
Licensed under the MIT license.


[power-assert]: https://github.com/power-assert-js/power-assert
[power-assert-banner]: https://raw.githubusercontent.com/power-assert-js/power-assert-js-logo/master/banner/banner-official-fullcolor.png
[npm]: https://npmjs.org/package/lab-espower-transformer
[npm-image]: https://badge.fury.io/js/lab-espower-transformer.svg
[license]: https://github.com/feugy/lab-espower-transformer/blob/master/MIT-LICENSE.txt
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat
[lab]: https://github.com/hapijs/lab
[homepage]: http://feugy.github.io
