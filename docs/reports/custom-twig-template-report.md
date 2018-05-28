# Twig Template

The **Twig Template** Data Source allows you to create reports in the Craft Control Panel using Twig Templates in your `craft/templates` folder.

<iframe src="https://player.vimeo.com/video/248062317" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Setting up a Custom Twig Template report requires a couple of steps.

1. Create a new Custom Twig Template Report
2. Add your Template Settings
3. Customize your Report's `Results Template` and `Options Template` settings

_See the Sprout Reports `examples/templates` folders for commented example files of Twig Template Reports and Options Templates. Copy those files to your `craft/template` folder and setup a Twig Template report to use them as described below._

## Template Settings

To setup a Twig Template report you need to build a Results Template. Identifying your Results Template is the one required component of your Custom Twig Template report. The report template settings behave just like the Craft Sections 'Entry Template' setting.

**Results Template** (required) - `_reports/reportname/results`
**Options Template** - `_reports/reportname/options`

_Sprout Reports will look for your templates in your front-end `craft/templates` folder so it's a good idea to use a hidden folder that can't be accessed directly from the web._

## Results Template

Your Results Template is where you will build your report. A report consists of any number of rows. Rows must each have an equal number of columns.

Sprout Reports gives you three helper variables to use when building reports:

- **craft.sproutReports.addHeaderRow()** - Define the columns in the first row of your report
- **craft.sproutReports.addRow()** - Add a single row of data to your report
- **craft.sproutReports.addRows()** - Add an array of multiple rows of data to your report

You can use `addHeaderRow` anywhere in your template to define the first row in your report that will be used as the column headers. The `addRow` and `addRows` actions add rows to your report in the order that they are used in your template.

Here is a simple, hard-coded example of each tag in use for a two-column report:

**craft/templates/_reports/reportname/results.html**

``` twig
{# addHeaderRow accepts a single array with a comma-separated list of values #}
{% do craft.sproutReports.addHeaderRow(['Region', 'Trip Name']) %}

{# addRow, also accepts a single array with a comma-separated list of values. The array is defined by the opening and closing square brackets. #}
{% do craft.sproutReports.addRow([
  'Europe', 
  'Camino de Santiago'
]) %}

{# addRows, accepts an array of arrays, where each array includes a comma-separated list of values. Note that there are two levels of opening and closing square brackets. #}
{% do craft.sproutReports.addRows([
	['North America', 'John Muir Trail'],
	['Asia', 'Langtang Trek']
]) %}
```

## Options Template

If you want to give your user control over some options when they generate a report, you can do so by defining an Options Template. 

We recommend using the Form Macros supported by the Craft CP to keep consistent with the Craft UI. Sprout Reports will import the Craft CP Form Macros. Your Options Template can look like this where the imported `forms` variable includes all Craft form macros defined in `craft/app/templates/_includes/forms.html`. :

**craft/templates/_reports/reportname/options.html**

``` twig
{{ forms.textField({
	label: "Limit"|t,
	name: "limit",
	size: 10,
	value: options.quantity is defined ? options.quantity : null,
	first: true
}) }}

{{ forms.selectField({
	label: "Region"|t,
	name: "region",
	options: {
		"africa" : "Africa",
		"antartica" : "Antartica",
		"asia" : "Asia",
		"australia" : "Australia",
		"europe" : "Europe",
		"northAmerica" : "North America",
		"southAmerica" : "South America"
	},
	value: options.region is defined ? options.region : "Antartica"
}) }}
```

All options are available to you via the `options` variable. Be sure to test if they exist. See an example Option Template with several common fields in the Sprout Reports `examples/templates` folder.

- Text
- Textarea
- Dropdown
- Radio Buttons
- Checkboxes
- Lightswitch
- DateTime (requires that you start the field name with "datetime", i.e. 'datetimeStartDate')

Examples also include how to toggle the display of conditional fields and how to use DateTime fields which require some additional steps. Additional field types can be used, but some fields with advanced validation may require that you create a [Custom Data Source]({entry:1441:url}). The only field Twig Template Reports support with advanced validation requirements is the DateTime field.

## Using Options in Results

When a user runs a report, all Options will be passed to the Results Template and can be used in your Options Template Twig code to help query and display data how you wish:

**_reports/reportname/results.html**

``` twig
{# In this example we use our options to retrieve a CategoryModel and then use that CategoryModel to retrieve all Trips that relate to that Category. We limit the results by the number provided by the user in the Limit option. #}
{% set region = craft.categories.group(options.region) %}
{% set trips = craft.entries.section('trips').relatedTo(region).limit(options.limit) %}

{# Create a Header Row #}
{% do craft.sproutReports.addHeaderRow(['Region', 'Trip Name']) %}

{# Loop through our trips and output the Region and Trip Name for each result #}
{% for trip in trips %}
	{% do craft.sproutReports.addRow([
  	trip.relatedCategory.first().title, 
		trip.title
	]) %}
{% endfor %}
```