"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrossingAppsQueries = void 0;
const tslib_1 = require("tslib");
const grossingAppsList_json_1 = tslib_1.__importDefault(require("../../grossingAppsList.json"));
const GrossingAppsQueries = {
    allGrossingApps: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const { detailedAppsList } = grossingAppsList_json_1.default;
            return {
                grossingApps: detailedAppsList
            };
        }
        catch (err) {
            throw err;
        }
    })
};
exports.GrossingAppsQueries = GrossingAppsQueries;
//# sourceMappingURL=grossingApps.js.map