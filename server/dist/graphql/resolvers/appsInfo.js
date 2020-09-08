"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeAppsQueries = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const FreeAppsQueries = {
    allFreeApps: (parent, args, ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const appsList = yield axios_1.default.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
                .then(result => result.data.feed.entry);
            const detailedAppsList = yield Promise.all(appsList.map((a) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                const singleApp = yield axios_1.default.get(`https://itunes.apple.com/hk/lookup?id=${a.id.attributes["im:id"]}`)
                    .then(result => result.data.results[0]);
                return {
                    title: singleApp.trackName,
                    images: {
                        artworkUrl60: singleApp.artworkUrl60,
                        artworkUrl100: singleApp.artworkUrl100,
                        artworkUrl512: singleApp.artworkUrl512
                    },
                    category: singleApp.genres[0],
                    rating: singleApp.averageUserRating,
                    ratingCount: singleApp.userRatingCount
                };
            })));
            const offset = lodash_1.default.get(args, "offset", 0);
            const first = lodash_1.default.get(args, "first", undefined);
            const freeAppsList = first === undefined ? (detailedAppsList.slice(offset)) : (detailedAppsList.slice(offset, offset + first));
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
//# sourceMappingURL=appsInfo.js.map