"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("./config/express"));
const index_1 = tslib_1.__importDefault(require("./config/index"));
const ExpressServer = new express_1.default();
const portNumber = process.env.PORT || index_1.default.port;
ExpressServer.init();
ExpressServer.httpServer.listen(portNumber, () => {
    console.log(`🚀 Server started at PORT ${portNumber} `);
    console.log(`🚀 Server ready at http://localhost:${portNumber}${ExpressServer.server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${portNumber}${ExpressServer.server.subscriptionsPath}`);
});
//# sourceMappingURL=index.js.map