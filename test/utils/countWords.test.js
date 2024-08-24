import { describe, test, expect, vi } from "vitest";
import countWords from "../../src/utils/countWords";

describe("countWords", () => {
  test("should count words correctly", () => {
    const setWordCount = vi.fn();
    const textValue = "hello hello world";
    const selectedRadio = "Normal";

    countWords(setWordCount, textValue, selectedRadio);

    expect(setWordCount).toHaveBeenCalledWith([
      { word: "hello", count: 2 },
      { word: "world", count: 1 },
    ]);
  });

  test("should sort words in ascending order", () => {
    const setWordCount = vi.fn();
    const textValue = "hello world hello world world";
    const selectedRadio = "Ascending";

    countWords(setWordCount, textValue, selectedRadio);

    expect(setWordCount).toHaveBeenCalledWith([
      { word: "hello", count: 2 },
      { word: "world", count: 3 },
    ]);
  });

  test("should sort words in descending order", () => {
    const setWordCount = vi.fn();
    const textValue = "hello world hello world world";
    const selectedRadio = "Descending";

    countWords(setWordCount, textValue, selectedRadio);

    expect(setWordCount).toHaveBeenCalledWith([
      { word: "world", count: 3 },
      { word: "hello", count: 2 },
    ]);
  });

  test("should handle empty text", () => {
    const setWordCount = vi.fn();
    const textValue = "";
    const selectedRadio = "Normal";

    countWords(setWordCount, textValue, selectedRadio);

    expect(setWordCount).toHaveBeenCalledWith([]);
  });
});
