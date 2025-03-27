import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fetchUserInfo } from "../src/js/services/userService";

describe("User Service Tests", () => {
  it("formats user data correctly", async () => {
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

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => mockResponse,
      }),
    );

    const data = await fetchUserInfo(12);
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/user/12");
  });

  it("handles errors correctly", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ ok: false }));
    await expect(fetchUserInfo(12)).rejects.toThrow(
      "Failed to fetch data from 12",
    );
  });
});
