import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fetchUserInfo } from "../src/js/services/userService";
import { handleApiError } from "../src/utils/errorHandler";

jest.mock("../src/utils/errorHandler", () => ({
  handleApiError: jest.fn(),
}));

describe("User Service Tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn(); // Mock global fetch
    jest.spyOn(console, "error").mockImplementation(() => {}); // Empêche les logs d'erreur dans la console
  });

  afterEach(() => {
    jest.resetAllMocks(); // Réinitialise les mocks après chaque test
    console.error.mockRestore();
  });

  it("fetches user data correctly", async () => {
    const mockResponse = {
      data: {
        id: 12,
        userInfos: { firstName: "Karl", lastName: "Dovineau", age: 31 },
        todayScore: 0.12,
        keyData: {
          calorieCount: 1930,
          proteinCount: 155,
          carbohydrateCount: 290,
          lipidCount: 50,
        },
      },
    };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await fetchUserInfo(12);
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/user/12");
  });

  it("handles HTTP errors correctly", async () => {
    global.fetch.mockResolvedValueOnce({ ok: false, status: 404 });

    await expect(fetchUserInfo(12)).rejects.toThrow("HTTP error! status: 404");

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/user/12");
    expect(handleApiError).toHaveBeenCalledWith(
      new Error("HTTP error! status: 404"),
      "12"
    );
  });

  it("handles network errors correctly", async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchUserInfo(12)).rejects.toThrow(
      "Network Error" // Correction : correspond au message d'erreur simulé
    );
  });

  it("handles mock data correctly", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true, // Correction : ajoute la propriété `ok`
      json: async () => ({ userId: 12, name: "John Doe" }),
    });

    const result = await fetchUserInfo(12);
    expect(result).toEqual({ userId: 12, name: "John Doe" });
  });
});
