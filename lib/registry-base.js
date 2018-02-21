/**
 * This file is part of pigalle.registries.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module registry-base
 * @description A base class for registries usable by the Pigalle framework.
 * @example
 *
 * const {RegistryBase} = require('@pigalle/registries.base')
 *
 * // A custom registry for the Pigalle framework.
 * class CustomRegistry extends RegistryBase {
 *
 * }
 *
 */

const {PigalleBaseClass} = require('@pigalle/core.base.class')

/**
 * A base class for registries usable by the Pigalle framework.
 *
 * @class
 * @public
 */
class RegistryBase extends PigalleBaseClass {

}

module.exports = {}
module.exports.RegistryBase = RegistryBase
