app.controller("clothCtrl", function (myfactory, $scope) {
    console.log("Inside Clothes controller...");
    var param = "clothes";
    var cloth = myfactory.getJson(param);
    console.log("I got the promise....");
    console.log("data is..");

    cloth.then(function (data) {
        $scope.show = data;
        console.log("Pass...");
    }, function (err) {
        $scope.show = err;
        console.log("fail...");
    })
});
