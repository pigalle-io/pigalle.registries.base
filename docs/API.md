# API reference of :

A base class for registries usable by the Pigalle framework.

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

### Modules

<dl>
<dt><a href="#module_registry-base">registry-base</a></dt>
<dd><p>A base class for registries usable by the Pigalle framework.</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#set">set(key, value)</a> ⇒ <code>RegistryBase</code></dt>
<dd><p>Define a new item to registry.</p>
</dd>
</dl>

<a name="module_registry-base"></a>

### registry-base
A base class for registries usable by the Pigalle framework.

**Example**  
```js
const {PigalleBaseClass} = require('@pigalle/core.base.class')
const {RegistryBase} = require('@pigalle/registries.base')

class MyTypeToStore extends PigalleBaseClass {}

// A custom registry for the Pigalle framework.
class CustomRegistry extends RegistryBase {

  constructor (...args) {
    super(MyTypeToStore, ...args)
  }

}
```

* [registry-base](#module_registry-base)
    * [~RegistryBase](#module_registry-base..RegistryBase)
        * [new RegistryBase(entity, ...args)](#new_module_registry-base..RegistryBase_new)
        * [.set(key, value)](#module_registry-base..RegistryBase+set) ⇒ <code>RegistryBase</code>
        * [.get(key)](#module_registry-base..RegistryBase+get) ⇒ <code>EntityBase</code>
    * [~PIGALLE_TYPE](#module_registry-base..PIGALLE_TYPE) : <code>string</code>

<a name="module_registry-base..RegistryBase"></a>

#### registry-base~RegistryBase
A base class for registries usable by the Pigalle framework.

**Kind**: inner class of [<code>registry-base</code>](#module_registry-base)  
**Access**: public  

* [~RegistryBase](#module_registry-base..RegistryBase)
    * [new RegistryBase(entity, ...args)](#new_module_registry-base..RegistryBase_new)
    * [.set(key, value)](#module_registry-base..RegistryBase+set) ⇒ <code>RegistryBase</code>
    * [.get(key)](#module_registry-base..RegistryBase+get) ⇒ <code>EntityBase</code>

<a name="new_module_registry-base..RegistryBase_new"></a>

##### new RegistryBase(entity, ...args)
Create a new instance of {RegistryBase}


| Param | Type | Description |
| --- | --- | --- |
| entity | <code>EntityBase</code> \| <code>\*</code> | A derived class of {EntityBase} |
| ...args |  | The arguments. |

<a name="module_registry-base..RegistryBase+set"></a>

##### registryBase.set(key, value) ⇒ <code>RegistryBase</code>
Define a new item to registry.

**Kind**: instance method of [<code>RegistryBase</code>](#module_registry-base..RegistryBase)  
**Returns**: <code>RegistryBase</code> - The current instance of {RegistryBase}.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |
| value | <code>EntityBase</code> \| <code>\*</code> | The value. |

<a name="module_registry-base..RegistryBase+get"></a>

##### registryBase.get(key) ⇒ <code>EntityBase</code>
Get an item by key from the registry.

**Kind**: instance method of [<code>RegistryBase</code>](#module_registry-base..RegistryBase)  
**Returns**: <code>EntityBase</code> - - An instance of the derived class of {EntityBase}  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key of item. |

<a name="module_registry-base..PIGALLE_TYPE"></a>

#### registry-base~PIGALLE_TYPE : <code>string</code>
The type of this Pigalle component.

**Kind**: inner constant of [<code>registry-base</code>](#module_registry-base)  
<a name="set"></a>

### set(key, value) ⇒ <code>RegistryBase</code>
Define a new item to registry.

**Kind**: global function  
**Returns**: <code>RegistryBase</code> - The current instance of {RegistryBase}.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The key. |
| value | <code>EntityBase</code> \| <code>\*</code> | The value. |

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Mon, 26 Feb 2018 10:29:52 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
