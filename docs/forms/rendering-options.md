# Rendering Options

Rendering options allow you to customize form and field output without having to override the templates. Rendering options can be passed as a twig object to the `displayForm`, `displayTab` or `displayField` tags.

``` twig
{% set options = {
    "id": "my-form"
} %}

{{ craft.sproutForms.displayForm("formHandle", options) }}
```

Rendering Options may be handy to solve a specific situation, however, can become harder to maintain or reuse across multiple forms. 

::: tip Note
For 100% control over your Form Templates, see [Template Overrides](./template-overrides.md).
:::

## Options

Sprout Forms supports the following rendering options.

### Form tag options

The following options will modify the `<form>` tag.

| Option  | Type     | Default                     | Description                                                             |
|---------|----------|-------------------|---------------------------------------------------------------|
| `id`    | `string` | `formHandle-form` | The id to assign to the form tag                              |
| `class` | `string` | `formHandle-form` | A space-separated list of classes to apply to the form tag    |
| `errorClass` | `string` | `errors` | A space separated list of classes to apply to the form tag when errors are found |

### Field wrapper and input tag options

The following options will modify the `<input>` field and the wrapper `<div>` and related tags that surround each `<input>` field. (See the `displayField()` example below.)

| Option  | Type     | Default                     | Description                                                             |
|---------|----------|-----------------------------|-------------------------------------------------------|
| `id`    | `string` | `fieldHandle-field`  | The id to assign to the input tag                            |
| `class` | `string` | `fieldHandle-field` | A space separated list of classes to apply to the input tag     |
| `errorClass` | `string` | `errors` | A space separated list of classes to apply to theinput tag when errors are found |
| `data` | `{}` | | An object (associative array) of data attributes to set on the form or input tag

::: warning 
Custom Form Fields will need to add support for these options on their own. If you are using Rendering Options with a custom Form Field and they are not behaving as expected, you may need to reach out to the respective plugin developer.
:::

## Examples

### Overriding values via the displayForm tag

The `displayForm()` accepts rendering options for the form tag and input fields. To provide rendering options for your fields, you must create a `fields` object and use the field handle to identify the fields that the containing rendering options should be applied to.

```twig
{% set options = {
    "id": "myform",
    "class": "form-class form-class-customized",
    "errorClass": "form-has-error",
    "fields": {
        "fieldHandle": {
            "id": "myfield",
            "class": "my-fancy-class",
            "errorClass": "field-has-error",
            "data": {
                "hidden": "false",
            }
        }
    }
} %}

{{ craft.sproutForms.displayForm("formHandle", options) }}
```

#### Rendered HTML

```twig
<form method="post" id="myform" class="form-class form-class-customized form-has-error">

    {# The example assumes our field is a Single Line field #}
    <div id="fields-myfield-field" class="field singleline field my-fancy-class required field-has-error">
        <div class="heading">
            <label for="fields-fieldHandle">Field Name</label>
        </div>
        <div class="input">
            <input type="text" name="fields[fieldHandle]" id="fields-myfield" class="my-fancy-class" required data-hidden="false" />
        </div>
    </div>

</form>
```
