import validateMovieSearchForm from "../../../components/forms/validateMovieSearchForm";
const goodValues = { title: "Some Title", zipcode: "78213" };
const badValues = { title: "", zipcode: "123" };

test("returns an errors object", () => {
  expect(validateMovieSearchForm(goodValues)).toEqual({});
});

test("returns an errors object", () => {
  expect(validateMovieSearchForm(badValues)).toEqual({
    title: "Required",
    zipcode: "Invalid Zip Code - Must be 5 digits"
  });
});
