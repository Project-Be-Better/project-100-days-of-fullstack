import { describe, it, expect } from "vitest";
import { fetchData, Post } from "../src/common/fetchData";

describe("fetchData", () => {
  it("Should fetch data from an api", async () => {
    const data: Post = await fetchData(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("title");

    expect(typeof data.id).toBe("number");
    expect(typeof data.title).toBe("string");
  });

  it("Should throw an arror for an invalid URL ", async () => {
    try {
      await fetchData("https://jsonplaceholder.typicode.com/invalid-url");
      throw new Error("Expecting this to throw Error but did not work");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toContain("HTTP error");
    }
  });
});
