# cesium-umd

[![npm](https://img.shields.io/npm/v/cesium-umd)](https://www.npmjs.com/package/cesium-umd) [![](https://data.jsdelivr.com/v1/package/npm/cesium-umd/badge)](https://www.jsdelivr.com/package/npm/cesium-umd)

A repackaging of [Cesium](https://www.npmjs.com/package/cesium) as an UMD package. It was developed in order to be able to import Cesium in [Observable](https://observablehq.com/).

**It doesn't allow to display a Cesium viewer in Observable**. That would be way too complicated because Cesium loads a lot of data files. It should work without problem if you just want to use the mathematical helpers of Cesium.

Note that after the publication of this package I figured the team behind Cesium already provided an UMD version. It's not very well documented in their doc but [it is used in some of their examples](https://cesium.com/docs/tutorials/quick-start/). So you probably would prefer to use it instead, notably because it does allow display.

## Usage in Observable

```
Cesium = require('cesium-umd@the-version')

Cesium.Cartesian3
```
