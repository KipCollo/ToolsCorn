# Material

Angular Material is a UI component library for Angular applications. It provides a set of pre-built and customizable UI components following the Material Design principles.

## Angular Material CDK

Angular Material CDK (Component Dev Kit) isa set of tools and utilities provided by Angular Material that helps in building custom, reusable UI components. It provides
features like drag and drop, virtual scrolling, overlays, and more.

## Angular Material Theming

Angular Material Theming is a feature that allows customization of the visual appearance and style of Angular Material components. It provides a way to define
custom color palettes, typography, and other style attributes to create a unique look and feel for the application.

**Install Angular Material**:- Add Angular Material to your application by running the following command:

```sh
ng add @angular/material
```

The ng add command will install Angular Material, the Component Dev Kit (CDK), and will ask you the following questions to determine which features to include:
1. Choose a prebuilt theme name, or "custom" for a custom theme:- You can choose from prebuilt material design themes or set up an extensible custom theme.
2. Set up global Angular Material typography styles:- Whether to apply the global typography styles to your application.

The ng add command will additionally perform the following actions:

- Add project dependencies to package.json
- Add the Roboto font to your index.html
- Add the Material Design icon font to your index.html
- Add a few global CSS styles to:
    1. Remove margins from body
    2. Set height: 100% on html and body
    3. Set Roboto as the default application font

Angular Material comes packaged with Angular CLI schematics to make creating Material applications easier.Schematics are included with both @angular/cdk and @angular/material. Once you install the npm packages, they will be available through the Angular CLI.

```sh
ng add @angular/cdk
```

