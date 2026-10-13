# React Leaflet

React components for Leaflet maps.
React Leaflet provides bindings between React and Leaflet. It does not replace Leaflet, but leverages it to abstract Leaflet layers as React components. As such, it can behave differently from how other React components work, notably:

`DOM rendering` - React does not render Leaflet layers to the DOM, this rendering is done by Leaflet itself. React only renders a <div> element when rendering the MapContainer component and the contents of UI layers components.
`Component properties`- The properties passed to the components are used to create the relevant Leaflet instance when the component is rendered the first time and should be treated as immutable by default.
During the first render, all these properties should be supported as they are by Leaflet, however they will not be updated in the UI when they change unless they are explicitly documented as being mutable.
Mutable properties changes are compared by reference (unless stated otherwise) and are applied calling the relevant method on the Leaflet element instance.

## Installation

Using a package registry:- React, React DOM and Leaflet are required peer dependencies. You must add them to your project if they are not already installed:

npm install react@rc react-dom@rc leaflet

Then you can install React Leaflet:

npm install react-leaflet@next
