# Sprout Import

## Seeding

## Fake Data

In this example, we'll create 100 fake Form Entries using faker. 

::: code

``` craft3
{%- set faker = craft.sproutImport.faker -%}
[
{%- for i in 0..99 %}
  {
    "@model": "barrelstrength\\sproutforms\\integrations\\sproutimport\\elements\\Entry",
    "attributes": {
      "formId": 42,
      "ipAddress": "{{ random([faker.ipv4,faker.ipv6]) }}",
      "userAgent": "{{ faker.userAgent }}",
      "dateCreated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}",
      "dateUpdated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}"
    },
    "content": {
      "title": "{{ faker.text(42) }}",
      "fields": {
        "fullName": "{{ faker.text(42) }}",
        "email": "{{ faker.email }}",
        "message": "{{ faker.text(42) }}"
      }
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
]
```

``` craft2
{%- set faker = craft.sproutImport.faker -%}
[
{%- for i in 0..99 %}
  {
    "@model": "SproutForms_Entry",
    "attributes": {
      "formId": 42,
      "ipAddress": "{{ random([faker.ipv4,faker.ipv6]) }}",
      "userAgent": "{{ faker.userAgent }}",
      "dateCreated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}",
      "dateUpdated": "{{ faker.dateTimeBetween('-2 years', 'now')|date('Y-m-d h:m:s') }}"
    },
    "content": {
      "title": "{{ faker.text(42) }}",
      "fields": {
        "fullName": "{{ faker.text(42) }}",
        "email": "{{ faker.email }}",
        "message": "{{ faker.text(42) }}"
      }
    }
  }{% if not loop.last %},{% endif %}
{%- endfor -%}
]
```

:::