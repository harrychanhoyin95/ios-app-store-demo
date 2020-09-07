"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeAppsQueries = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const FreeAppsQueries = {
    appsInfo: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const appsList = yield axios_1.default.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
                .then(result => result.data.feed.entry);
            const parsedAppsList = yield Promise.all(appsList.map((a) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
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
            return parsedAppsList;
        }
        catch (err) {
            throw err;
        }
    })
};
exports.FreeAppsQueries = FreeAppsQueries;
//# sourceMappingURL=appsInfo.js.map