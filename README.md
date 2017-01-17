# Material UI - Simple React Form

[Simple React Form](https://github.com/nicolaslopezj/simple-react-form) is a powerful framework that simplifies the use of forms in React and [React Native](https://github.com/nicolaslopezj/simple-react-form#react-native). This is a set of components that use Material UI.

To use this fields, import the field and pass it as ```type``` to the ```Field``` component.

```js
<Form state={this.state} onChange={changes => this.setState(changes)}>
  <Field fieldName='name' label='Name' type={Text}/>
  <Field fieldName='date' label='A Date' type={DatePicker}/>
</Form>
```

## Components

List of the components

### [Checkbox](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/checkbox.jsx)

```js
import Checkbox from 'simple-react-form-material-ui/lib/checkbox'
```

Type: ```Boolean```

### [Date Picker](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/date-picker.jsx)

Renders the [material-ui date picker](http://www.material-ui.com/#/components/date-picker)

```js
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
```

Type: ```Date```

### [Multiple Checkbox](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/multiple-checkbox.jsx)

Select multiple items from a array

```js
import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'
```

Type: ```[String|Number]```

Props:
- ```options```: A array of
  - ```label``` ```String```: The label of the option
  - ```value``` ```String|Number```: The value
  - ```description``` ```String``` Optional: A description that will be rendered below the option

### [Radio](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/radio.jsx)

Select one item from a array

```js
import Radio from 'simple-react-form-material-ui/lib/radio'
```

Type: ```String|Number```

Props:
- ```options```: A array of
  - ```label``` ```String```: The label of the option
  - ```value``` ```String|Number```: The value
  - ```description``` ```String``` Optional: A description that will be rendered below the option

### [Select With Method](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/select-with-method.jsx)

A text field that searchs items with meteor methods

```js
import SelectWithMethod from 'simple-react-form-material-ui/lib/select-with-method'
```

Type: ```String|Number```

Props:
- ```multi``` ```Boolean``` Optional: Allow to select multiple items.
- ```methodName``` ```String```: Meteor method that recieves the search string and returns an array of
  - ```label``` ```String```: The visible text.
  - ```value``` ```String|Number```: The value.
  - ```color``` ```String``` Optional: The background color of the chip
  - ```image``` ```String``` Optional: The url of the image
  - ```initals``` ```String``` Optional: The initals of the chip. Don't provide this if image is present.
- ```labelMethodName``` ```String```: Meteor method that recieves the value and must return the item description. If ```multi``` is set to true, this will recieve an array of the values and must return an array with the items descriptions in the same order. Item description is the same as the one returned in ```methodName```:
  - ```label``` ```String```: The visible text.
  - ```value``` ```String|Number```: The value.
  - ```color``` ```String``` Optional: The background color of the chip
  - ```image``` ```String``` Optional: The url of the image
  - ```initals``` ```String``` Optional: The initals of the chip. Don't provide this if image is present.
- ```connection``` Optional, defaults to ```Meteor```: A Meteor connection.
- ```waitTime``` Optional, defaults to ```400```: Time with no changes that activates the search.
- ```create``` ```Function``` Optional: A function that creates a document and pass the value in a callback.
- ```createLabel``` ```Function``` Optional: A function that recieves the search input and returns the create label.
- ```canCreate``` ```Function``` Optional, defaults to ```() => true```: A function that recieves the search input and returns a ```Boolean``` indicating if ```create``` can be called.

### [Select](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/select.jsx)

Select one item from a array in a select field

```js
import Select from 'simple-react-form-material-ui/lib/select'
```

Type: ```String|Number```

Props:
- ```options```: A array of
  - ```label``` ```String```: The label of the option
  - ```value``` ```String|Number```: The value

### [Tags](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/tags.jsx)

Create a array of Strings.

```js
import Tags from 'simple-react-form-material-ui/lib/tags'
```

Type: ```[String]```

### [Text](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/text-field.jsx)

```js
import Text from 'simple-react-form-material-ui/lib/text'
```

Type: ```String```

Props:
- ```fieldType``` ```String``` Optional: The type of the input. Example: number, email, password.

### [Textarea](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/textarea.jsx)

A String with multiple lunes

```js
import Textarea from 'simple-react-form-material-ui/lib/textarea'
```

Type: ```String```

### [Toggle](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/toggle.jsx)

```js
import Toggle from 'simple-react-form-material-ui/lib/toggle'
```

Type: ```Boolean```

### [Object](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/object.jsx)

```js
import ObjectComponent from 'simple-react-form-material-ui/lib/object'
```

Type: ```Object```

Usage:

```js
<Form>
  <Field fieldName='myObject' type={ObjectComponent}>
    <Field fieldName='myField' type={Text}/>
    <Field fieldName='myField2' type={Text}/>
  </Field>
</Form>
```

### [Array](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/array.jsx)

```js
import ArrayComponent from 'simple-react-form-material-ui/lib/array'
```

Type: ```Array```

Usage:

```js
<Form>
  <Field fieldName='myArray' type={ArrayComponent}>
    <Field fieldName='myField' type={Text}/>
    <Field fieldName='myField2' type={Text}/>
  </Field>
</Form>
```
