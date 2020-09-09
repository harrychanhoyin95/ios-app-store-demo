"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const freeApps_1 = require("./freeApps");
const grossingApps_1 = require("./grossingApps");
const search_1 = require("./search");
const rootResolver = {
    Query: Object.assign(Object.assign(Object.assign({}, freeApps_1.FreeAppsQueries), grossingApps_1.GrossingAppsQueries), search_1.SearchAppsQueries)
};
exports.default = rootResolver;
//# sourceMappingURL=index.js.map