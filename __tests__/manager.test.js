const { Manager } = require('../libs/objects.cjs');

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with an id, name, email, and office number", () => {
      const testManager = new Manager(123, 123, 123, 123);

      expect(testManager).toEqual({ id: 123, name: 123, email: 123, officeNumber: 123 });
    });
  });
});
