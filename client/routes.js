// we need a home :)
Router.route('/', { template: 'home' });

var routes = ["item", "list"];
routes.forEach(function (route) {
  Router.route("/" + route, function () {
    $(".nav-tabs li").removeClass("active");
    $(".nav-tabs a[href='/" + route + "']").parent().addClass("active");
    this.render(route);
  });
});
