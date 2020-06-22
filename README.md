Form.io Pretty Checkboxes
-------------------------
This is a Form.io renderer module that adds the [Pretty Checkbox](https://lokesh-coder.github.io/pretty-checkbox/) styles to all rendered checkboxes.

## Installation
To install this module, just type the following.

```
npm install --save @formio/pretty-checkbox
```

## Adding to your renderer.
To enable this for all rendered forms in your application, do the following.

```js
import { Formio } from 'formiojs';
import FormioPrettyCheckbox from '@formio/pretty-checkbox';
Formio.use(FormioPrettyCheckbox);
```

You will also need to add the styles like so.

```css
@import '~@formio/pretty-checkbox/dist/formio-pretty-checkbox.css';
```

## Extending
You can also use the class to create your own extended Checkbox classes that use the Pretty Checkbox.

```js
import { Formio } from 'formiojs';
import FormioPrettyCheckbox from '@formio/pretty-checkbox';
Formio.use(FormioPrettyCheckbox);

const PrettyCheckbox = FormioPrettyCheckbox.components.checkbox;

export default class CustomCheckbox extends PrettyCheckbox {
}
```
