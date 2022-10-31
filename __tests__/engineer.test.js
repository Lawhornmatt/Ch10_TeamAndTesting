const { Engineer } = require('../libs/objects.cjs');

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with an id, name, email, and GitHub Username", () => {
      const testEngineer = new Engineer(123, 123, 123, 123);

      expect(testEngineer).toEqual({ id: 123, name: 123, email: 123, ghUsername: 123 });
    });
  });
});
