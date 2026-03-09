# Angular Internationalization

Internationalization, sometimes referenced as i18n, is the process of designing and preparing your project for use in different locales around the world. Localization is the process of building versions of your project for different locales. The localization process includes the following actions.

- Extract text for translation into different languages
- Format data for a specific locale

A locale identifies a region in which people speak a particular language or language variant. Possible regions include countries and geographical regions. A locale determines the formatting and parsing of the following details.

- Measurement units including date and time, numbers, and currencies
- Translated names including time zones, languages, and countries

- Add the localize package:- To take advantage of the localization features of Angular, use the Angular CLI to add the @angular/localize package to your project.
To add the @angular/localize package, use the following command to update the package.json and TypeScript configuration files in your project.

```sh
ng add @angular/localize
```

It adds types: ["@angular/localize"] in the TypeScript configuration files as well as the reference to the type definition of @angular/localize at the top of the main.ts file.
If @angular/localize is not installed and you try to build a localized version of your project (for example, while using the i18n attributes in templates), the Angular CLI will generate an error, which would contain the steps that you can take to enable i18n for your project.

Options:-
--project - The name of the project. string
--use-at-runtime -If set, then $localize can be used at runtime. Also @angular/localize gets included in the dependencies section of package.json, rather than devDependencies, which is the default. boolean ,false

## Refer to locales by ID

Angular uses the Unicode locale identifier (Unicode locale ID) to find the correct locale data for internationalization of text strings.

Unicode locale ID

1. A locale ID conforms to the Unicode Common Locale Data Repository (CLDR) core specification.
2. CLDR and Angular use BCP 47 tags as the base for the locale ID

A locale ID specifies the language, country, and an optional code for further variants or subdivisions. A locale ID consists of the language identifier, a hyphen (-) character, and the locale extension.

```ts
{language_id}-{locale_extension}
```

NOTE:- To accurately translate your Angular project, you must decide which languages and locales you are targeting for internationalization.
Many countries share the same language, but differ in usage. The differences include grammar, punctuation, formats for currency, decimal numbers, dates, and so on.

E.g
English - Canada - en-CA
English - United States of America - en-US
French - Canada - fr-CA
French - France - fr-FR

Set the source locale ID - Use the Angular CLI to set the source language in which you are writing the component template and code.

By default, Angular uses en-US as the source locale of your project.
To change the source locale of your project for the build, complete the following actions.

   1. Open the angular.json workspace build configuration file.
   2. Add or modify the sourceLocale field inside the i18n section:

```ts
{
  "projects": {
    "your-project": {
      "i18n": {
        "sourceLocale": "ca"  // Use your desired locale code
      }
    }
  }
}
```
