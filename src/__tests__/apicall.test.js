import pretty from "pretty";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ApiCall from "../components/ApiCall";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<ApiCall />", () => {
  it("renders user data", async () => {
    const fakeUser = [
      {
        id: "1",
        name: "Joni",
        email: "xyx@example.com",
        address: {
          street: "12, Charming Avenue",
        },
      },
      {
        id: "2",
        name: "Bae",
        email: "xy@example.com",
        address: {
          street: "1, Charming Avenue",
        },
      },
      {
        id: "3",
        name: "Jon",
        email: "xyz@example.com",
        address: {
          street: "123, Charming Avenue",
        },
      },
    ];
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUser),
      })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<ApiCall />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<details>
        <summary>Joni</summary><strong>xyx@example.com</strong><br>lives in 12, Charming Avenue
      </details>
      <details>
        <summary>Bae</summary><strong>xy@example.com</strong><br>lives in 1, Charming Avenue
      </details>
      <details>
        <summary>Jon</summary><strong>xyz@example.com</strong><br>lives in 123, Charming Avenue
      </details>"
    `);
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });

  it("throws an error", async () => {
    jest.spyOn(global, "fetch").mockRejectedValue("error");

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<ApiCall />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });
});
