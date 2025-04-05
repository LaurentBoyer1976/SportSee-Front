import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import BarChart from "../src/js/components/barChart";
import LineChart from "../src/js/components/lineChart";
import RadarChart from "../src/js/components/radarChart";
import RadialChart from "../src/js/components/radialChart";
import mockData from "../mock/mockData";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

beforeAll(() => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

const renderWithContainer = (ui) => {
  return render(
    <MemoryRouter>
      <div style={{ width: "400px", height: "300px", minWidth: "200px", minHeight: "150px" }}>
        {ui}
      </div>
    </MemoryRouter>
  );
};

describe("Charts Components", () => {
  test("renders BarChart with correct data", () => {
    renderWithContainer(<BarChart data={mockData.USER_ACTIVITY[0].sessions} />);
    expect(screen.getByText("Calories brûlées (kCal)")).toBeInTheDocument(); // Vérifie la légende
    expect(screen.getByText("Poids (kg)")).toBeInTheDocument(); // Vérifie la légende
  });

  test("renders LineChart with correct data", () => {
    renderWithContainer(<LineChart data={mockData.USER_AVERAGE_SESSIONS[0].sessions} />);
    expect(screen.getByText((_, element) => element?.textContent.includes("30"))).toBeInTheDocument(); // Vérifie la durée
    expect(screen.getByText((_, element) => element?.textContent.includes("40"))).toBeInTheDocument();
  });

  test("renders RadarChart with correct data", () => {
    renderWithContainer(<RadarChart data={mockData.USER_PERFORMANCE[0].data} />);
    expect(screen.getByText((_, element) => element?.textContent.includes("Cardio"))).toBeInTheDocument(); // Vérifie le type
    expect(screen.getByText((_, element) => element?.textContent.includes("80"))).toBeInTheDocument(); // Vérifie la valeur
  });

  test("renders RadialChart with correct data", () => {
    renderWithContainer(<RadialChart data={[{ value: 75 }]} />);
    expect(screen.getByText((_, element) => element.textContent.includes("75"))).toBeInTheDocument(); // Vérifie le score
  });

  it("handles empty data gracefully", () => {
    renderWithContainer(<BarChart data={[]} />);
    expect(screen.getByText(/Aucune donnée disponible/i)).toBeInTheDocument(); // Vérifie qu'un message d'erreur est affiché
  });
});
