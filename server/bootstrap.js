Meteor.startup(function () {
  // code to run on server at startup
  if (Items.find().count() === 0) {
    var list = [
      { name: "oil", count: 0 },
      { name: "vinegar", count: 2 },
      { name: "rubber duck", count: 1 }
    ];
    list.forEach(function(item) {
      Items.insert(item);
    });
  }
});
