# jsval 1.1
Utility javascript framework

## Add Validation to inputs:

```js
$V.add({id:"season", message: "Season cannot be empty", isRequired:true});
$V.add({id:"createdon", message: "Invalid date.", isRequired:true, isDate: true, dateFormat: 'dd/MM/yyyy'});
$V.add({id:"email", message: "Invalid emial", isEmail:true});
```

## Add Callback function:

```js
$V.callback = function(d){console.log(d);};
```

## Fire Validation:

```js
$V.validate();
```
