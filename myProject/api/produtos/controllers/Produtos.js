'use strict';

/**
 * Produtos.js controller
 *
 * @description: A set of functions called "actions" for managing `Produtos`.
 */

module.exports = {

  /**
   * Retrieve produtos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.produtos.search(ctx.query);
    } else {
      return strapi.services.produtos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a produtos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.produtos.fetch(ctx.params);
  },

  /**
   * Count produtos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.produtos.count(ctx.query);
  },

  /**
   * Create a/an produtos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.produtos.add(ctx.request.body);
  },

  /**
   * Update a/an produtos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.produtos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an produtos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.produtos.remove(ctx.params);
  }
};
