import { handleApiError } from "../src/utils/errorHandler";

describe("handleApiError", () => {
  it("logs the error and throws a new error", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    const endpoint = "/user/12";
    const error = new Error("Network Error");

    expect(() => handleApiError(error, endpoint)).toThrow(
      `Failed to fetch data from ${endpoint}`
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      `Error fetching data from ${endpoint}:`,
      error
    );

    consoleSpy.mockRestore();
  });
});
