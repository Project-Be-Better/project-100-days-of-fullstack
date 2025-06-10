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
  it("should log title of each issues", () => {
    const mockIssues: Issue[] = [
      { id: "1", title: "Issue 1", status: "open", estimate: 3 },
      { id: "2", title: "Issue 2", status: "in-progress", estimate: 5 },
    ];

    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    logIssues(mockIssues);

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith("Issue 1");
    expect(logSpy).toHaveBeenCalledWith("Issue 2");

    logSpy.mockRestore();
  });
});

describe("getIssueData", () => {
  it("should get fetch an array of issues", async () => {
    const issues: Issue[] = await getIssueData();
    expect(Array.isArray(issues)).toBe(true);
  });
});
