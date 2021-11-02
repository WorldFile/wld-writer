const test = require("flug");
const write = require("./index.js");

const data = {
  xScale: 2445.9849051249894,
  ySkew: 0,
  xSkew: 0,
  yScale: -2445.98490512499,
  xOrigin: 7699959.850241235,
  yOrigin: 1323859.6754601842,
};

test("default", ({ eq }) => {
  eq(write(data), "2445.9849051249894\n0\n0\n-2445.98490512499\n7699959.850241235\n1323859.6754601842\n");
});

test("write numerical strings", ({ eq }) => {
  eq(write({
    ...data,
    xScale: "2445.9849051249894123456789",
  }), "2445.9849051249894123456789\n0\n0\n-2445.98490512499\n7699959.850241235\n1323859.6754601842\n");
});

test("custom sep", ({ eq }) => {
  eq(write(data, { sep: "\r\n" }), "2445.9849051249894\r\n0\r\n0\r\n-2445.98490512499\r\n7699959.850241235\r\n1323859.6754601842\r\n");
});

test("undefined", ({ eq }) => {
  let error;
  try {
    write(undefined);
  } catch (e) {
    error = e;
  }
  eq(error.message, "[wld-writer] can't write a world file without data!");
});

test("null", ({ eq }) => {
  let error;
  try {
    write(undefined);
  } catch (e) {
    error = e;
  }
  eq(error.message, "[wld-writer] can't write a world file without data!");
});

test("xSkew = null", ({ eq }) => {
  let error;
  try {
    write({ ...data, xSkew: null });
  } catch (e) {
    error = e;
  }
  eq(error.message, "[wld-writer] xSkew is null");
});
