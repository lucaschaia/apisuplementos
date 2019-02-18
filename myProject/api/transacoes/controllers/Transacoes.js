'use strict';

/**
 * Transacoes.js controller
 *
 * @description: A set of functions called "actions" for managing `Transacoes`.
 */

module.exports = {

  /**
   * Retrieve transacoes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.transacoes.search(ctx.query);
    } else {
      return strapi.services.transacoes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a transacoes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.transacoes.fetch(ctx.params);
  },

  /**
   * Count transacoes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.transacoes.count(ctx.query);
  },

  /**
   * Create a/an transacoes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.transacoes.add(ctx.request.body);
  },

  /**
   * Update a/an transacoes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.transacoes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an transacoes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.transacoes.remove(ctx.params);
  }
};
