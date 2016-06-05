beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});

beforeEach(function() {
  jasmine.addMatchers({
    toContainsThiago: function () {
      return {
        compare: function(text) {
          var result = {pass: text.includes("Thiago") > 0};

          if (result.pass) {
            result.message = "OK";
          } else {
            result.message = "NOT OK";
          }

          return result;
        }
      }
    }
  });
});
