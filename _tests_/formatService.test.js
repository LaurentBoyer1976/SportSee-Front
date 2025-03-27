import { fetchUserInfo } from "../src/js/services/userService";
import "@testing-library/jest-dom";

describe("fetchUserInfo", () => {
  beforeEach(() => {
    global.fetch = jest.fn(); // Mock global fetch
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.resetAllMocks(); // Réinitialise les mocks après chaque test
    console.error.mockRestore();
  });

  it("retourne les données utilisateur correctement", async () => {
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

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await fetchUserInfo(12);
    expect(data).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/user/12");
  });

  it("formate correctement les données utilisateur", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
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
      }),
    });

    const response = await fetchUserInfo(12);
    const data = response.data; // Accès à la clé `data`

    expect(data).toEqual({
      id: 12,
      userInfos: { firstName: "Karl", lastName: "Dovineau", age: 31 },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    });
  });

  it("gère les erreurs correctement", async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    await expect(fetchUserInfo(12)).rejects.toThrow(
      "Failed to fetch data from 12"
    );
  });

  it("gère une erreur lors de l'appel API", async () => {
    // Simule une réponse échouée
    global.fetch.mockRejectedValueOnce(new Error("Failed to fetch data"));

    await expect(fetchUserInfo(12)).rejects.toThrow("Failed to fetch data");
  });
});