"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeAppsQueries = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const freeAppsList_json_1 = tslib_1.__importDefault(require("../../freeAppsList.json"));
const FreeAppsQueries = {
    allFreeApps: (parent, args, ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const { detailedAppsList } = freeAppsList_json_1.default;
            const offset = lodash_1.default.get(args, "offset", 0);
            const limit = lodash_1.default.get(args, "limit", undefined);
            const freeAppsList = limit === undefined ? (detailedAppsList.slice(offset)) : (detailedAppsList.slice(offset, offset + limit));
            return {
                freeApps: freeAppsList,
                totalCount: freeAppsList.length
            };
        }
        catch (err) {
            throw err;
        }
    })
};
exports.FreeAppsQueries = FreeAppsQueries;
//# sourceMappingURL=freeApps.js.map