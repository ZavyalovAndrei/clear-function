import getHealthStatus from "../app";

test.each([
  ["healthy", 51],
  ["healthy", 100],
  ["healthy", 89],
  ["wounded", 50],
  ["wounded", 30],
  ["wounded", 15],
  ["critical", 14],
  ["critical", 0],
])(
  "should set health status %s with heath value %i",
  (expected, healthValue) => {
    const character = { name: "testName", health: healthValue };
    const result = getHealthStatus(character);
    expect(result).toEqual(expected);
  }
);
