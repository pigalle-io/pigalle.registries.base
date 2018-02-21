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
 * const {PigalleBaseClass} = require('@pigalle/core.base.class')
 * const {RegistryBase} = require('@pigalle/registries.base')
 *
 * class MyTypeToStore extends PigalleBaseClass {}
 *
 * // A custom registry for the Pigalle framework.
 * class CustomRegistry extends RegistryBase {
 *
 *   constructor (...args) {
 *     super(MyTypeToStore...args)
 *   }
 *
 * }
 *
 */

const {PigalleBaseClass} = require('@pigalle/core.base.class')
const {InvalidTypeError} = require('@9fv.io/invalidtype-error')

/**
 * A base class for registries usable by the Pigalle framework.
 *
 * @class
 * @public
 */
class RegistryBase extends PigalleBaseClass {
  constructor (type, ...args) {
    super(...args)
    if (!RegistryBase.isPigalleClass(type)) {
      throw new InvalidTypeError(`Provided type is not a derived Pigalle class (type=${type}, typeof=${typeof type})`)
    }
    this.type = type
    this.store = new Map()
  }

  add (key, value) {
    if (typeof key !== 'string') {
      throw new TypeError(`Key must be a string (key=${key},typeof=${typeof key}`)
    }
    if (!RegistryBase.isPigalleInstance(value)) {
      throw new InvalidTypeError(`Provided value is not an instance of a derived Pigalle class (value=${value}, typeof=${typeof value})`)
    }
    if (!value.instanceOf(this.type)) {
      throw new InvalidTypeError(`Provided value is not an instance of ${this.type.className()} (type=${value}, typeof=${typeof value})`)
    }
    if (!this.store.get(key)) {
      this.store.set(key, value)
    } else {
      throw new Error(`Duplicate declaration of ${key}`) // @todo: create a custom exception named {DuplicatedDeclarationError}
    }
    return this
  }

  get (key) {
    if (typeof key !== 'string') {
      throw new TypeError(`Key must be a string (key=${key},typeof=${typeof key}`)
    }
    return this.store.get(key)
  }
}

module.exports = {}
module.exports.RegistryBase = RegistryBase
