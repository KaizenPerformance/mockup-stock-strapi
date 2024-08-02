'use strict';

/**
 * mockup-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mockup-user.mockup-user');
