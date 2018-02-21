/**
 * This file is part of pigalle.registries.base
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

require('should')

/* eslint-env mocha */

require('should')

const {RegistryBase} = require('../lib/registry-base')

describe('Class {RegistryBase}', () => {
  it('should be a function', () => {
    (RegistryBase).should.be.a.Function()
  })
})

describe('Create a instance of {RegistryBase} using <new> keyword', () => {
  it('should be an object', () => {
    (new RegistryBase()).should.be.an.Object()
  })

  it('should be an instance of {RegistryBase}', () => {
    (new RegistryBase()).should.be.an.instanceOf(RegistryBase)
  })
})

describe('Create a instance of {RegistryBase} using <factory> method', () => {
  it('should be an object', () => {
    (RegistryBase.factory()).should.be.an.Object()
  })

  it('should be an instance of {RegistryBase}', () => {
    (RegistryBase.factory()).should.be.an.instanceOf(RegistryBase)
  })
})
