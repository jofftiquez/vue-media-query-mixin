# vue-media-query-mixin
A vue mixin to get current media query, xs, sm, md, lg and xl.

# Installation 

**NPM**

`npm install vue-media-query-mixin`

**YARN**

`yarn add vue-media-query-mixin`

# Installation

```javascript
import Vue from 'vue';
import VueMediaQueryMixin from 'vue-media-query-mixin';

Vue.use(VueMediaQueryMixin, {framework:'vuetify'});

```

I added the framework option because there are css framework that have different media query breakpoints. E.g. bootstrap's xs is `<=575` while on vuetify xs is `<=599`.

**Frameworks Supported**

Will use `vuetify` as default when "options" was omitted.

1. `vuetify`
2. `bootstrap`

# Usage

**JS**

```javascript
this.wXS // boolean
```

**TEMPLATE**

```javascript
{{ wXS }} // boolean

<img src="..." v-if="wXS"> // visible only on XS devices.

```


# API

| **data** | **description** |
| -------- | --------------- |
| `windowWidth` | `number` |
| `windowHeight` | `number` |
| `wXS` | `boolean` |
| `wSM` | `boolean` |
| `wMD` | `boolean` |
| `wLG` | `boolean` |
| `wXL` | `boolean` |

