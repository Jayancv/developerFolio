import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  window.matchMedia = query => ({
    matches: false,
    media: query,
    addEventListener() {},
    removeEventListener() {}
  });
});

it("renders the main sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", {level: 1})).toBeTruthy();
  for (const id of ["about", "experience", "projects", "skills", "contact"]) {
    expect(document.getElementById(id)).not.toBeNull();
  }
});
