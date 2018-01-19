app.controller("mobileCtrl", function (myfactory, $scope) {
    console.log("Inside Mobiles controller...");
    var param = "mobile";
    var mobiles = myfactory.getJson(param);
    console.log("I got the promise....");
    console.log("data is..");

    mobiles.then(function (data) {
        $scope.show = data;
        console.log("Pass...");
    }, function (err) {
        $scope.show = err;
        console.log("fail...");
    })
});
