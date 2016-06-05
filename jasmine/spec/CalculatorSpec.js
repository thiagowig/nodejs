describe ("Calculator", function() {

    it ("should sum two numbers", function() {
      expect(sum(1,1)).toEqual(2);
      expect(sum(10,10)).toEqual(20);
    });

    it ("should subtract two number", function() {
      expect(subtract(1,1)).toEqual(0);
      expect(subtract(1,1)).not.toEqual(10);
    });

    it ("should subtract two number", function() {
      expect(returnThiago()).toContainsThiago();
    });
});
