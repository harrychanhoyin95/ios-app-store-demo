"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const node_cron_1 = tslib_1.__importDefault(require("node-cron"));
const axios_1 = tslib_1.__importDefault(require("axios"));
class Cron {
    constructor() {
        this.tenMinutes = () => {
            node_cron_1.default.schedule("*/30 * * * * *", () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log("Fetching Top Free Apps...");
                const appsList = yield axios_1.default.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
                    .then(result => result.data.feed.entry);
                const detailedAppsList = yield Promise.all(appsList.map((a) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const singleApp = yield axios_1.default.get(`https://itunes.apple.com/hk/lookup?id=${a.id.attributes["im:id"]}`)
                        .then(result => result.data.results[0]);
                    return {
                        title: singleApp.trackName,
                        description: a.summary.label.replace(/\u2028/g, ""),
                        author: singleApp.artistName,
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
                fs_1.default.writeFileSync('freeAppsList.json', JSON.stringify({ detailedAppsList }), 'utf8');
            }));
        };
        this.secondTenMinutes = () => {
            node_cron_1.default.schedule("*/30 * * * * *", () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log("Fetching Grossing Apps...");
                const appsList = yield axios_1.default.get('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json')
                    .then(result => result.data.feed.entry);
                const detailedAppsList = yield Promise.all(appsList.map((a) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const singleApp = yield axios_1.default.get(`https://itunes.apple.com/hk/lookup?id=${a.id.attributes["im:id"]}`)
                        .then(result => result.data.results[0]);
                    return {
                        title: singleApp.trackName,
                        description: a.summary.label.replace(/\u2028/g, ""),
                        author: singleApp.artistName,
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
                fs_1.default.writeFileSync('grossingAppsList.json', JSON.stringify({ detailedAppsList }), 'utf8');
            }));
        };
    }
}
exports.default = Cron;
//# sourceMappingURL=cron.js.map