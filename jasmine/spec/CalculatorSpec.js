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
    it ("should subtract two numbers", function() {
      expect(Calculator.subtract(1,1)).toEqual(0);
      expect(Calculator.subtract(1,1)).not.toEqual(10);
    });

    it ("shouldn't be executed", function() {
      expect(Calculator.returnThiago()).toContainsThiago();
    });
  });

  describe("Spying something", function() {
    it ("expect thath the method is called", function() {
      spyOn(Calculator, "sumWithSomeHelp");

      Calculator.sum(1,1);

      expect(Calculator.sumWithSomeHelp).toHaveBeenCalled();
      expect(Calculator.sumWithSomeHelp).toHaveBeenCalledWith(1, 1);
    });

    it ("spy.and.returnValue", function() {
      spyOn(Calculator, "makeAnIntegration").and.returnValue(true);

      expect(Calculator.makeAnIntegration()).toBeTruthy();
    });

    it ("spy.and.callFake", function() {
      spyOn(Calculator, "makeAnIntegration").and.callFake(function() {
        return true;
      });

      expect(Calculator.invokeAnIntegration()).toBe(true);
    });
  });

});
