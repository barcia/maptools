import Geometry from "../src/Geometry.js";

test("Can create a LineString", () => {
  const geometry = new Geometry("LineString", [
	[100.0, 0.0, 123.32],
	[101.0, 1.0],
	[90.0, 9.0, 300],
	[20.0, 9.0],
  ]);

  expect(geometry.toJSON()).toEqual({
	type: "LineString",
	coordinates: [
	  [100.0, 0.0, 123.32],
	  [101.0, 1.0],
	  [90.0, 9.0, 300],
	  [20.0, 9.0],
	],
  });
});

test("Can`t create a LineString with only one position", () => {
  const geometry = new Geometry("LineString", [
	[100.0, 0.0, 123.32]
  ]);

  expect(geometry.toJSON()).toBeNull();
});
