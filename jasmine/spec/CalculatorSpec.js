describe("Calculator", function() {

  beforeEach(function() {
    console.log("beforeEach");
  });

  beforeAll(function() {
    console.log("beforeAll");
  });

  afterEach(function() {
    console.log("afterEach");
  });

  afterAll(function() {
    console.log("afterAll");
  });

  describe("Testing returns", function() {
    it ("should subtract two number", function() {
      expect(Calculator.subtract(1,1)).toEqual(0);
      expect(Calculator.subtract(1,1)).not.toEqual(10);
    });

    it ("shouldn't be executed", function() {
      expect(Calculator.returnThiago()).toContainsThiago();
    });
  });

  describe("Spying something", function() {
    it ("testing with spy", function() {
      spyOn(Calculator, "sumWithSomeHelp");

      Calculator.sum(1,1);

      expect(Calculator.sumWithSomeHelp).toHaveBeenCalled();
      expect(Calculator.sumWithSomeHelp).toHaveBeenCalledWith(1, 1);
    });
  });

});
