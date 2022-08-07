import test from "flug";
import write from "./index.js";

const data = {
  xScale: 2445.9849051249894,
  ySkew: 0,
  xSkew: 0,
  yScale: -2445.98490512499,
  xOrigin: 7699959.850241235,
  yOrigin: 1323859.6754601842
};

test("default", ({ eq }) => {
  eq(write(data), "2445.9849051249894\n0\n0\n-2445.98490512499\n7699959.850241235\n1323859.6754601842\n");
});

test("write numerical strings", ({ eq }) => {
  eq(
    write({
      ...data,
      xScale: "2445.9849051249894123456789"
    }),
    "2445.9849051249894123456789\n0\n0\n-2445.98490512499\n7699959.850241235\n1323859.6754601842\n"
  );
});

test("custom sep", ({ eq }) => {
  eq(write(data, { sep: "\r\n" }), "2445.9849051249894\r\n0\r\n0\r\n-2445.98490512499\r\n7699959.850241235\r\n1323859.6754601842\r\n");
});

test("write super precise numbers", ({ eq }) => {
  const data = {
    xScale: "2445.9849051249894000077777777777777",
    ySkew: 0,
    xSkew: 0,
    yScale: -2445.98490512499,
    xOrigin: 7699959.850241235,
    yOrigin: 1323859.6754601842
  };
  const written = write(data);
  eq(written, "2445.9849051249894000077777777777777\n0\n0\n-2445.98490512499\n7699959.850241235\n1323859.6754601842\n");
});
