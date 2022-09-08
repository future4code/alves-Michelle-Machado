System.register("index", ["express", "cors"], function (exports_1, context_1) {
    "use strict";
    var express_1, cors_1, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1_1) {
                express_1 = express_1_1;
            },
            function (cors_1_1) {
                cors_1 = cors_1_1;
            }
        ],
        execute: function () {
            app = express_1["default"]();
            app.use(express_1["default"].json());
            app.use(cors_1["default"]());
            app.listen(3003, function () {
                console.log("Server is running in port 3003");
            });
        }
    };
});
//# sourceMappingURL=tsc.js.map