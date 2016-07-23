

module.exports = function(app) {
    return {
        findAll: function(params, callback) {
            return callback([
                {section: "Wishlist", description: "A home"},
                {section: "Serie", description: "The americans"} 
            ]);
        }
    }
}