/**
 * This file is part of pigalle.registries.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {PigalleBaseClass} = require('@pigalle/core.base.class')
const {UndefinedError} = require('@9fv.io/undefined-error')
const {RegistryBase} = require('../lib/registry-base')

class ValidType extends PigalleBaseClass {}
class InvalidType {}

describe('Class {RegistryBase}', () => {
  it('should be a function', () => {
    (RegistryBase).should.be.a.Function()
  })
})

describe('Create a instance of {RegistryBase} using <new> keyword', () => {
  it('and not passing argument as type should throw an {UndefinedError}', () => {
    (() => new RegistryBase()).should.throw(Error) // @todo: check using {UndefinedError} is wrong...
  })

  it('and a valid derived {PigalleBaseClass} as type should be an object', () => {
    (new RegistryBase(ValidType)).should.be.an.Object()
  })

  it('and a valid derived {PigalleBaseClass} as type should be an instance of {RegistryBase}', () => {
    (new RegistryBase(ValidType)).should.be.an.instanceOf(RegistryBase)
  })
})

describe('Create a instance of {RegistryBase} using <factory> method', () => {
  it('and not passing argument as type should throw an {UndefinedError}', () => {
    (() => RegistryBase.factory()).should.throw(Error) // @todo: check using {UndefinedError} is wrong...
  })

  it('and a valid derived {PigalleBaseClass} as type should be an object', () => {
    (RegistryBase.factory(ValidType)).should.be.an.Object()
  })

  it('and a valid derived {PigalleBaseClass} as type should be an instance of {RegistryBase}', () => {
    (RegistryBase.factory(ValidType)).should.be.an.instanceOf(RegistryBase)
  })
})

describe('Call <add> method', () => {
  it('using an invalid type should throw an {InvalidTypeError}', () => {
    (() => RegistryBase.factory(ValidType).add('key', new InvalidType())).should.throw(Error) // @todo: check using {UndefinedError} is wrong...
  })

  it('using an valid type should return an instance of {RegistryBase}', () => {
    (RegistryBase.factory(ValidType).add('key', new ValidType())).should.be.an.instanceOf(RegistryBase) // @todo: check using {UndefinedError} is wrong...
  })
})

describe('Call <get> method', () => {
  /**
  it('using an invalid type should throw an {InvalidTypeError}', () => {
    (() => RegistryBase.factory(ValidType).add('key', new InvalidType())).should.throw(Error) // @todo: check using {UndefinedError} is wrong...
  })
   */

  it('using an existent key should return an instance of {ValidType}', () => {
    (RegistryBase.factory(ValidType).add('key', new ValidType()).get('key')).should.be.an.instanceOf(ValidType) // @todo: check using {UndefinedError} is wrong...
  })
})
