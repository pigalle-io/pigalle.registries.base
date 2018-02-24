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
 * const {PigalleBaseClass} = require('@pigalle/core.base.class')
 * const {RegistryBase} = require('@pigalle/registries.base')
 *
 * class MyTypeToStore extends PigalleBaseClass {}
 *
 * // A custom registry for the Pigalle framework.
 * class CustomRegistry extends RegistryBase {
 *
 *   constructor (...args) {
 *     super(MyTypeToStore, ...args)
 *   }
 *
 * }
 *
 */

const {EntityBase} = require('@pigalle/entities.base')
const {InvalidTypeError} = require('@9fv.io/invalidtype-error')

/**
 * The type of this Pigalle component.
 *
 * @type {string}
 */
const PIGALLE_TYPE = 'registry'

/**
 * A base class for registries usable by the Pigalle framework.
 *
 * @class
 * @public
 */
class RegistryBase extends EntityBase {
  /**
   * Create a new instance of {RegistryBase}
   *
   * @param entity {EntityBase|*} - A derived class of {EntityBase}
   * @param args - The arguments.
   * @constructor
   * @public
   */
  constructor (entity, ...args) {
    super(...args)
    this.entity = entity
    if (EntityBase.isParentClassOf(entity)) {
      this.setType(PIGALLE_TYPE)
      this.entity = entity
      this.store = new Map()
    } else {
      throw new InvalidTypeError(`Provided type is not a derived class of {${this.entity} (type=${entity}, typeof=${typeof entity})`)
    }
  }

  /**
   * Define a new item to registry.
   *
   * @param key {string} - The key.
   * @param value {EntityBase|*} - The value.
   * @return {RegistryBase} The current instance of {RegistryBase}.
   * @public
   */
  set (key, value) {
    if (typeof key !== 'string') {
      throw new TypeError(`Key must be a string (key=${key},typeof=${typeof key}`)
    }
    if (!RegistryBase.isPigalleInstance(value)) {
      throw new InvalidTypeError(`Provided value is not an instance of a derived Pigalle class (value=${value}, typeof=${typeof value})`)
    }
    if (!value.instanceOf(this.entity)) {
      throw new InvalidTypeError(`Provided value is not an instance of ${this.entity.className()} (type=${value}, typeof=${typeof value})`)
    }
    if (!this.store.get(key)) {
      this.store.set(key, value)
    } else {
      throw new Error(`Duplicate declaration of ${key}`) // @todo: create a custom exception named {DuplicatedDeclarationError}
    }
    return this
  }

  /**
   * Define a new item to registry.
   *
   * @param key {string} - The key.
   * @param value {EntityBase|*} - The value.
   * @return {RegistryBase} The current instance of {RegistryBase}.
   * @public
   * @alias set
   */
  add (key, value) {
    return this.set(key, value)
  }

  /**
   * Get an item by key from the registry.
   *
   * @param key {string} - The key of item.
   * @return {EntityBase} - An instance of the derived class of {EntityBase}
   */
  get (key) {
    if (typeof key !== 'string') {
      throw new TypeError(`Key must be a string (key=${key},typeof=${typeof key}`)
    }
    return this.store.get(key)
  }
}

module.exports = {}
module.exports.RegistryBase = RegistryBase
