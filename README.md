# cesium-umd

A repackaging of [Cesium](https://www.npmjs.com/package/cesium) as an UMD package. It was developed in order to be able to import Cesium in [Observable](https://observablehq.com/).

**It doesn't allow to display a Cesium viewer in Observable**. That would be way too complicated because Cesium loads a lot of data files. It should work without problem if you just want to use the mathematical helpers of Cesium.

## Usage in Observable

```
cesium = require('cesium-umd@the-version')

cesium.Cartesian3
```