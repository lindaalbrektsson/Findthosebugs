import { render } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";
import Post from "../components/Post";

//Bugg 5 — Fel inlägg visas

describe("Post", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      json: async () => ({}),
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("ska göra fetchanrop baserat på id", () => {
    // Act
    render(<Post id={2} />);

    // Assert
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts/2",
    );
  });
});
