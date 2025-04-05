import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ChartsLayout from "../src/js/layouts/chartsLayout";
import * as hooks from "../src/hooks/useFetchUserInfo";
import ErrorBoundary from "../src/js/components/ErrorBoundary";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock("../src/hooks/useFetchUserInfo", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    userInfo: { firstName: "Karl", lastName: "Dovineau", age: 31 },
    score: 0.75,
  })),
}));

jest.mock("../src/hooks/useFetchUserActivity", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    sessions: [{ day: 1, kilogram: 80, calories: 240 }],
  })),
}));

jest.mock("../src/hooks/useFetchUserAverageSessions", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    sessions: [{ day: 1, sessionLength: 30 }],
  })),
}));

jest.mock("../src/hooks/useFetchUserPerformance", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: [{ value: 80, kind: "Cardio" }],
  })),
}));

describe("ChartsLayout Component", () => {
  it("renders correctly with mocked data", () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ChartsLayout userId={"12"} />
        </ErrorBoundary>
      </MemoryRouter>
    );
    expect(screen.getByText(/Cardio/i)).toBeInTheDocument();
    expect(screen.getByText(/240/i)).toBeInTheDocument();
    expect(screen.getByText(/30/i)).toBeInTheDocument();
  });

  it("gère correctement les erreurs API", () => {
    jest.mocked(hooks.default).mockImplementationOnce(() => {
      throw new Error("Erreur API simulée");
    });

    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ChartsLayout userId={"12"} />
        </ErrorBoundary>
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Une erreur inattendue est survenue./i),
    ).toBeInTheDocument();
  });
});
