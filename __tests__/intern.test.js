const { Intern } = require('../libs/objects.cjs');

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with an id, name, email, and school", () => {
      const testIntern = new Intern(123, 123, 123, 123);

      expect(testIntern).toEqual({ id: 123, name: 123, email: 123, school: 123 });
    });
  });
});
