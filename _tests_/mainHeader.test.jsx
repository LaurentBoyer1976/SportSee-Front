import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainHeader from "../src/js/components/mainHeader";
import * as hooks from "../src/hooks/useFetchUserInfo"; // Corrigez le chemin ici

jest.mock("../src/hooks/useFetchUserInfo", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("MainHeader Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Réinitialise les mocks avant chaque test
    hooks.default.mockReturnValue(null); // Valeur par défaut pour éviter des erreurs
  });

  it("affiche les informations utilisateur", () => {
    // Simule une réponse avec les informations utilisateur
    hooks.default.mockReturnValue({
      userInfo: { firstName: "Karl" },
    });

    render(<MainHeader userId={12} />);
    expect(screen.getByText(/Bonjour, Karl!/i)).toBeInTheDocument();
  });

  it("affiche un message de chargement si les données ne sont pas disponibles", () => {
    // Simule une réponse sans données utilisateur
    hooks.default.mockReturnValue(null);

    render(<MainHeader userId={12} />);
    expect(
      screen.getByText(/Chargement des informations utilisateur.../i),
    ).toBeInTheDocument();
  });
});
