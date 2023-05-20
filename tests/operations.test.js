import { sen, cos, sec, csc, tan, cot } from "../static/js/functions.js";

describe("Function operations", () => {
  const testsList = [
    { ca: 3, co: 12, h: 13, senResult: 0.9230769230769231, cosResult: 0.23076923076923078, secResult: 4.333333333333333, cscResult: 1.0833333333333333, tanResult: 4, cotResult: 0.25 },
    { ca: 2, co: 6, h: 6.3, senResult: 0.9523809523809524, cosResult: 0.31746031746031744, secResult: 3.15, cscResult: 1.05, tanResult: 3, cotResult: 0.3333333333333333 },
    { ca: 3, co: 5.1, h: 6, senResult: 0.85, cosResult: 0.5, secResult: 2, cscResult: 1.1764705882352942, tanResult: 1.7, cotResult: 0.5882352941176471 },
    { ca: 4.5, co: 2, h: 5, senResult: 0.4, cosResult: 0.9, secResult: 1.1111111111111112, cscResult: 2.5, tanResult: 0.4444444444444444, cotResult: 2.25 },
  ];

  it("correct answer with sen", () => {
    testsList.forEach(test => {
      const { co, h, senResult } = test;

      const result = sen(co, h);
      expect(result).toBe(senResult);
    });
  });

  it("correct answer with cos", () => {
    testsList.forEach(test => {
      const { ca, h, cosResult } = test;

      const result = cos(ca, h);
      expect(result).toBe(cosResult);
    });
  });

  it("correct answer with sec", () => {
    testsList.forEach(test => {
      const { ca, h, secResult } = test;

      const result = sec(h, ca);
      expect(result).toBe(secResult);
    });
  });

  it("correct answer with csc", () => {
    testsList.forEach(test => {
      const { co, h, cscResult } = test;

      const result = csc(h, co);
      expect(result).toBe(cscResult);
    });
  });

  it("correct answer with tan", () => {
    testsList.forEach(test => {
      const { ca, co, tanResult } = test;

      const result = tan(co, ca);
      expect(result).toBe(tanResult);
    });
  });

  it("correct answer with cot", () => {
    testsList.forEach(test => {
      const { ca, co, cotResult } = test;

      const result = cot(ca, co);
      expect(result).toBe(cotResult);
    });
  });
});
