# cesium-umd

[![npm](https://img.shields.io/npm/v/cesium-umd)](https://www.npmjs.com/package/cesium-umd) [![](https://data.jsdelivr.com/v1/package/npm/cesium-umd/badge)](https://www.jsdelivr.com/package/npm/cesium-umd)

A repackaging of [Cesium](https://www.npmjs.com/package/cesium) as an UMD package. It was developed in order to be able to import Cesium in [Observable](https://observablehq.com/).

**It doesn't allow to display a Cesium viewer in Observable**. That would be way too complicated because Cesium loads a lot of data files. It should work without problem if you just want to use the mathematical helpers of Cesium.

## Usage in Observable

```
cesium = require('cesium-umd@the-version')

cesium.Cartesian3
```