# jsval 1.1
Utility javascript framework

#### $V.add({validation attributes});

The tiny framework allows to add different types of validation to the inputs. Actual validation can be initiated by invoking `$v.validate()` method. `$V.callback` should be set to proper callback method. Callback method will be invoked with needed information on failure.

### Add Validation to inputs:

```js
$V.add({id:"season", message: "Season cannot be empty", isRequired:true});
$V.add({id:"createdon", message: "Invalid date.", isRequired:true, isDate: true, dateFormat: 'dd/MM/yyyy', dateSeparator:'/'});
$V.add({id:"email", message: "Invalid email", isEmail:true});
```

### Add Callback function:

```js
$V.callback = function(d){console.log(d);};
```

### Fire Validation:

```js
$V.validate();
```

### Supported Validatiaon Attributes:

| Attribute | Valid Values |
| --------- | ------------ |
| id        | Element ID for which validation to be applied |
| message   | Message to through on failure |
| isRequired| true/false   |
| isDate    | true/false   |
| isEmail   | true/false   |
| isNumeric | true/false   |
| isDecimal | true/false   |
| dateFormat| MM/dd/yyyy, dd/MM/yyyy, etc.|
| dateSeparator| /,- etc.|
| min		| When field is numeric or decimal minimum value|
| max		| When field is numeric or decimal maximum value|

