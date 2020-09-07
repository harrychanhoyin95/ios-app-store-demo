"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const apollo_server_express_1 = require("apollo-server-express");
const index_1 = tslib_1.__importDefault(require("../resolvers/index"));
const typeDefs = apollo_server_express_1.gql `
  type Query {
    appsInfo: [Apps]!
  }

  type Apps {
    title: String
    images: AppsImage
    category: String
    rating: Float
    ratingCount: Int
  }

  type AppsImage {
    artworkUrl60: String
    artworkUrl100: String
    artworkUrl512: String
  }
`;
const schema = {
    typeDefs,
    resolvers: index_1.default,
    introspection: true,
    playground: true,
};
exports.default = schema;
//# sourceMappingURL=index.js.map