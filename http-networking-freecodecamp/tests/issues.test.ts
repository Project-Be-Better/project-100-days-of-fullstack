import { describe, it, expect, vi } from "vitest";
import {
  Issue,
  logIssues,
  getIssueData,
  generateKey,
} from "../src/common/issues";

describe("generateKey", () => {
  it("should generate a 16-character hex string", () => {
    const key = generateKey();
    expect(key).toHaveLength(16);
  });
});

describe("logIssues", () => {
  it("should log title of each issues", () => {});
});
