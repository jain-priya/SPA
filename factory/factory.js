app.factory("myfactory", ($http, $q) => {
    console.log("Inside factory...");
    var object = {
        getJson(param) {
            console.log("Inside getJson factory");
            var pr = $q.defer();
            console.log("Inside getJson...");
            $http.get("../json/" + param + ".json").then(function (data) {
                console.log("data.data");
                pr.resolve(data.data);
            }, function (er) {
                console.log("Error", +er);
                pr.reject(er);
            });

            return pr.promise;
        }
    };
    console.log("End of factory...");
    return object;

})
