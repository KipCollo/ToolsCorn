# Maps

A `maps library` can refer to a set of software tools for creating and displaying maps on a website or in an application, such as Leaflet, OpenLayers, Mapbox GL JS, or MapLibre GL JS.

1. Leaflet: An open-source JavaScript library focused on simplicity, performance, and usability for creating interactive maps.
2. OpenLayers: A JavaScript library that allows developers to display dynamic maps with various layers from different sources, such as XYZ tiles or OGC services.
3. MapLibre GL JS: A free and open-source JavaScript library for rendering maps on a website, known for its 3D rendering and GPU-accelerated vector tile rendering.
4. Mapbox GL JS: A JavaScript library from Mapbox for building web maps and applications with their modern mapping technology, allowing for customization and interactivity.
5. MapLibre Native: A C++ library from the MapLibre organization for displaying maps within mobile or desktop applications


## Leaflet

Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 42 KB of JS, it has all the mapping features most developers ever need.
Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 42 KB of JS, it has all the mapping features most developers ever need.

Leaflet is designed with simplicity, performance and usability in mind. It works efficiently across all major desktop and mobile platforms, can be extended with lots of plugins, has a beautiful, easy to use and well-documented API and a simple, readable source code that is a joy to contribute to.

```js
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

```