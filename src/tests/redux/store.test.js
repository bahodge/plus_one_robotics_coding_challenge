import { store } from "../../redux/store";

test("it exports a redux store", () => {
  expect(typeof store).toBe("object");
});
