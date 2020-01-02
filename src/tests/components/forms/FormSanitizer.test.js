import {
  sanitizeStrings,
  sanitizeIntegers
} from "../../../components/forms/FormSanitizer";

// sanitizeStrings
test("returns an object", () => {
  const inputObject = { string: "  hello  " };
  const result = sanitizeStrings(inputObject);

  expect(result.hasOwnProperty("string")).toBe(true);
});

test("handles an untrimmed string", () => {
  const inputObject = { string: "  hello  " };
  const result = sanitizeStrings(inputObject);

  expect(result.string).toBe("hello");
});

test("handles a badly spaced string", () => {
  const inputObject = { string: "  hi      there   dude" };
  const result = sanitizeStrings(inputObject);

  expect(result.string).toBe("hi there dude");
});

// sanitizeIntegers
test("returns an object", () => {
  const inputObject = { number: "25" };
  const result = sanitizeIntegers(inputObject);

  expect(result.hasOwnProperty("number")).toBe(true);
});

test("handles an empty string", () => {
  const inputObject = { number: "" };
  const result = sanitizeIntegers(inputObject);

  expect(result.number).toBe(null);
});

test("handles floats", () => {
  const inputObject = { number: 25.52 };
  const result = sanitizeIntegers(inputObject);

  expect(result.number).toBe(25);
});

test("handles null", () => {
  const inputObject = { number: null };
  const result = sanitizeIntegers(inputObject);

  expect(result.number).toBe(null);
});
