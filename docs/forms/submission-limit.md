# Submission Limit

If you want to disable your form after a certain number of submissions, conditionally display your form based on the entry count.
  
::: code

``` craft3
{% set totalEntries = craft.sproutForms.entries.formHandle('contact').count() %}

{# Use a specific number or a dynamic value like globalSet.submissionLimit #}
{% if totalEntries > 49 %}
    Try again next time!
{% else %}
    {{ craft.sproutForms.displayForm('contact') }}
{% endif %}
```

``` craft2
{% set totalEntries = craft.sproutForms.entries.formHandle('contact').total() %}

{# Use a specific number or a dynamic value like globalSet.submissionLimit #}
{% if totalEntries > 49 %}
    Try again next time!
{% else %}
    {{ craft.sproutForms.displayForm('contact') }}
{% endif %}
```

:::
 