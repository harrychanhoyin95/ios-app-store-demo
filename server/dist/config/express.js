"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const http = tslib_1.__importStar(require("http"));
const index_1 = tslib_1.__importDefault(require("../graphql/schema/index"));
class Express {
    constructor() {
        this.server = new apollo_server_express_1.ApolloServer(index_1.default);
        this.init = () => {
            this.express = express_1.default();
            this.express.use(cors_1.default());
            this.server.applyMiddleware({ app: this.express });
            this.httpServer = http.createServer(this.express);
            this.server.installSubscriptionHandlers(this.httpServer);
        };
    }
}
exports.default = Express;
//# sourceMappingURL=express.js.map