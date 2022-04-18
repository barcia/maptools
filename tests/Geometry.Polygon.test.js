import Geometry from "../src/Geometry.js";

test("Can create a Polygon", () => {
  const geometry = new Geometry("Polygon", [
	[
		[100.0, 0.0],
		[101.0, 0.0],
		[101.0, 1.0],
		[100.0, 1.0],
		[100.0, 0.0]
	]
]);

  expect(geometry.toJSON()).toEqual({
	type: "Polygon",
	coordinates: [
		[
			[100.0, 0.0],
			[101.0, 0.0],
			[101.0, 1.0],
			[100.0, 1.0],
			[100.0, 0.0]
		]
	],
  });
});

test("Can create a Polygon with holes", () => {
  const geometry = new Geometry("Polygon", [
	[
		[100.0, 0.0],
		[101.0, 0.0],
		[101.0, 1.0],
		[100.0, 1.0],
		[100.0, 0.0]
	],
	[
		[100.8, 0.8],
		[100.8, 0.2],
		[100.2, 0.2],
		[100.2, 0.8],
		[100.8, 0.8]
	]
]);

  expect(geometry.toJSON()).toEqual({
	type: "Polygon",
	coordinates: [
		[
			[100.0, 0.0],
			[101.0, 0.0],
			[101.0, 1.0],
			[100.0, 1.0],
			[100.0, 0.0]
		],
		[
			[100.8, 0.8],
			[100.8, 0.2],
			[100.2, 0.2],
			[100.2, 0.8],
			[100.8, 0.8]
		]
	],
  });
});


test("Can't create a Polygon with bad syntax", () => {
	const geometry = new Geometry("Polygon", [
		[100.0, 0.0],
		[101.0, 0.0],
		[101.0, 1.0],
		[100.0, 1.0],
		[100.0, 0.0]
  ]);

	expect(geometry.toJSON()).toBeNull();
  });
