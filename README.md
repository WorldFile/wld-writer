# wld-writer
Write World Files (e.g., .gfw, .jgw, .j2w, .pgw, .tfw, and .wld)

# install
### install via terminal
```bash
npm install wld-writer
```
### install via script tag
```
<script src="https://unpkg.com/wld-writer">
```

# usage
```js
import writeWorldFile from "wld-writer";

const data = {
  xScale: 2445.9849051249894,
  ySkew: 0,
  xSkew: 0,
  yScale: -2445.98490512499,
  xOrigin: 7699959.850241235,
  yOrigin: 1323859.6754601842,
};

const wld = writeWorldFile(data);
```
wld will be
```text
2445.9849051249894
0
0
-2445.98490512499
7699959.850241235
1323859.6754601842

```

# advanced usage
# writing higher precision
Because of the limitations of floating point arithmetic,
you may store your parameters as strings instead of numbers.
You can write with those, too.
```js
const data = {
  xScale: "2445.9849051249894123456789",
  //...
}
writeWorldFile(data);
// "2445.9849051249894123456789\n0..."
```

## custom line separator
You can pass in a custom line separator:
```js
writeWorldFile(data, { sep: "\r\n" });
```

## extra logging
You can set debug to true to increase logging:
```js
writeWorldFile(data, { debug: true });
```
