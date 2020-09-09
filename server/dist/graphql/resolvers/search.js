"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAppsQueries = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const grossingAppsList_json_1 = tslib_1.__importDefault(require("../../grossingAppsList.json"));
const freeAppsList_json_1 = tslib_1.__importDefault(require("../../freeAppsList.json"));
const SearchAppsQueries = {
    allSearchedApps: (parent, args, ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const searchedData = [];
            const { detailedAppsList: grossingApps } = grossingAppsList_json_1.default;
            const { detailedAppsList: freeApps } = freeAppsList_json_1.default;
            const filter = lodash_1.default.get(args, "filter", "");
            if (filter === "")
                return { searchedApps: [] };
            const fullList = [...grossingApps, ...freeApps];
            fullList.forEach(app => {
                const reg = new RegExp(filter, "gi");
                if (app.title.match(reg)) {
                    searchedData.push(app);
                }
                if (app.description.match(reg)) {
                    searchedData.push(app);
                }
                if (app.category.match(reg)) {
                    searchedData.push(app);
                }
                if (app.author.match(reg)) {
                    searchedData.push(app);
                }
            });
            const searchedApps = lodash_1.default.uniqWith(searchedData, lodash_1.default.isEqual);
            return {
                searchedApps
            };
        }
        catch (err) {
            throw err;
        }
    })
};
exports.SearchAppsQueries = SearchAppsQueries;
//# sourceMappingURL=search.js.map