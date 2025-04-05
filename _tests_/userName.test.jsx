import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainHeader from "../src/js/components/mainHeader";
import { formatUserInfo } from "../src/js/services/formatService";
import * as hooks from "../src/hooks/useFetchUserInfo"; // Chemin corrigé

jest.mock("../src/hooks/useFetchUserInfo", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("MainHeader Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("formats user data correctly", () => {
    const rawData = {
      id: 12,
      userInfos: { firstName: "Karl", lastName: "Dovineau", age: 31 },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    };

    const formattedData = formatUserInfo(rawData); // Assurez-vous que cette fonction est importée
    expect(formattedData).toEqual({
      userId: 12,
      userInfo: { firstName: "Karl", lastName: "Dovineau", age: 31 },
      score: 12, // Correspond à `todayScore` multiplié par 100
      keyData: {
        calories: 1930,
        protein: 155,
        carbs: 290,
        fat: 50,
      },
    });
  });

  it("displays user information", () => {
    hooks.default.mockReturnValue({
      userInfo: { firstName: "Karl" },
    });
    render(<MainHeader userId={12} />);
    expect(screen.getByText(/Bonjour, Karl!/i)).toBeInTheDocument();
  });

  it("shows a loading message if data is unavailable", () => {
    hooks.default.mockReturnValue(null);
    render(<MainHeader userId={12} />);
    expect(
      screen.getByText(/Chargement des informations utilisateur.../i),
    ).toBeInTheDocument();
  });
});

import UserName from "../src/js/components/userName";

describe("UserName Component", () => {
  it("affiche le prénom de l'utilisateur", () => {
    render(<UserName data="Karl" />);
    expect(screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === "h1" &&
        content.includes("Bonjour") &&
        element.querySelector(".firstname")?.textContent === "Karl"
      );
    })).toBeInTheDocument();
  });
});
