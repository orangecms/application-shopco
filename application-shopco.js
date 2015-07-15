Items = new Meteor.Collection("items");

if (Meteor.isClient) {
    Meteor.subscribe("items");

    Template.list.helpers({
        items: function () {
            return Items.find();
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

    Meteor.publish("items", function() {
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
        return Items.find();
    });
}
