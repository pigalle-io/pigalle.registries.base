/**
 * This file is part of pigalle.registries.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

const {PigalleBaseClass} = require('@pigalle/core.base.class');

/**
 * A base class for Pigalle registries.
 *
 * @class
 */
class RegistryBase extends PigalleBaseClass {

  /**
   * Create a new instance of {RegistryBase}.
   *
   * @param args - The arguments.
   * @public
   * @constructor
   */
  constructor(...args) {
    if ((args.length === 1) && (typeof args[0] === 'object')) {
      const obj = args[0];
      obj.type = 'RegistryBase';
      args = [obj]
    }
    super(...args);
  }
}

module.exports = {};
module.exports.RegistryBase = RegistryBase;
