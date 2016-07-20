# Materia UI - Simple React Form

Simple React Form is a powerful framework that simplifies the use of forms in React. This is a set of components that use Material UI.

To use this fields, import this package once at startup

```js
import 'simple-react-form-material-ui'
```

## Components

List of the components

#### [Checkbox](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/checkbox.jsx)

Type: ```Boolean```

#### [Date Picker](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/date-picker.jsx)

Renders the [material-ui date picker](http://www.material-ui.com/#/components/date-picker)

Type: ```Date```

#### [Multiple Checkbox](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/multiple-checkbox.jsx)

Select multiple items from a array

Type: ```[String|Number]```

Props:
- ```options```: A array of
  - ```label``` ```String```: The label of the option
  - ```value``` ```String|Number```: The value
  - ```description``` ```String``` Optional: A description that will be rendered below the option

#### [Radio](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/radio.jsx)

Select one item from a array

Type: ```String|Number```

Props:
- ```options```: A array of
  - ```label``` ```String```: The label of the option
  - ```value``` ```String|Number```: The value
  - ```description``` ```String``` Optional: A description that will be rendered below the option

#### [Select With Method](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/select-with-method.jsx)

Type: ```String|Number```

#### [Select](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/select.jsx)

Select one item from a array in a select field

Type: ```String|Number```

Props:
- ```options```: A array of
  - ```label``` ```String```: The label of the option
  - ```value``` ```String|Number```: The value

#### [Tags](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/tags.jsx)

Create a array of Strings.

Type: ```[String]```

#### [Text](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/text-field.jsx)

Type: ```String```

Props:
- ```fieldType``` ```String``` Optional: The type of the input. Example: number, email, password.

#### [Textarea](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/textarea.jsx)

A String with multiple lunes

Type: ```String```

#### [Toggle](https://github.com/nicolaslopezj/simple-react-form-material-ui/blob/master/src/fields/toggle.jsx)

Type: ```Boolean```
