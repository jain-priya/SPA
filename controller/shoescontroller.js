app.controller("shoesCtrl", function (myfactory, $scope) {
    console.log("Inside Shoes controller...");
    var param = "shoes";
    var shoe = myfactory.getJson(param);
    console.log("I got the promise....");
    console.log("data is..");

    shoe.then(function (data) {
        $scope.show = data;
        console.log("Pass...");
    }, function (err) {
        $scope.show = err;
        console.log("fail...");
    })
});
