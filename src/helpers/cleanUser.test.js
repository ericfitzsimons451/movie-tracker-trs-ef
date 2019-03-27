import { cleanUser } from "../helpers/cleanUser";

describe("cleanUser", () => {
  it("should clean the user object", () => {
    const mockPreCleanedUser = {
      data: {
        email: "tman2272@aol.com",
        id: 1,
        name: "Taylor",
        password: "password",
        message: "Retrieved ONE User",
        status: "success"
      }
    };
    const expected = {
      email: "tman2272@aol.com",
      id: 1,
      name: "Taylor"
    };
    const results = cleanUser(mockPreCleanedUser);
    expect(results).toEqual(expected);
  });
});
