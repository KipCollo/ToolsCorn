## Storage

Flutter provides several options for persistent storage, some of which are as follow:

1. SharedPreferences: A key-value store for small data.
2. SQLite database: A relational database for structured data.
3. File System: For storing large files and data.
4. Firebase: A real-time database and backend as a service.

All of these storage options are supported through third-party packages, which are easily integrated into a Flutter app.


`SQLite` is an open-source, lightweight relational database management system (RDBMS) used to store and manage data. It is written in C and self-contained, meaning it does not require a separate server process or system. SQLite is commonly used in mobile applications, embedded systems, and web browsers and is also supported by many programming languages. It is a popular choice for databases because it is easy to use and does not require a lot of setup or configuration.


`Shared Preferences` - In Flutter, SharedPreferences is a plugin allowing you to store data in key-value pairs persistently. It is similar to a local database or cache, but it is specifically designed to store small pieces of data, such as user preferences or settings. The SharedPreferences plugin is often used to store simple pieces of data that need to be accessed by multiple screens or widgets in an app. For example, you might use SharedPreferences to store the user's login status or the app's theme color.


## Firebase

Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.

`Firebase Firestore` is a cloud-based NoSQL document database service provided by Firebase that makes it easy to store, manage, and retrieve data in your Flutter app. Firestore is a flexible, scalable, and easy-to-use database that allows you to store and retrieve data in the form of documents, collections, and fields.

`Firebase Authentication` is a service provided by Firebase that allows you to easily add user authentication to your Flutter app. With Firebase Authentication, you can authenticate users using email and password, phone number, or popular identity providers like Google, Facebook, and more.

`Cloud Functions` for Firebase is a serverless computing platform that simplifies backend development by allowing developers to write JavaScript or TypeScript code, which runs automatically in response to events from Firebase services or incoming HTTP requests. This framework leverages Google's cloud infrastructure to provide a scalable and managed environment, making it easier to build powerful serverless applications without the need for server maintenance.

`Push Notifications` - Implementing Firebase push notifications in Flutter involves setting up a Firebase project, integrating the FCM plugin, handling and displaying incoming notifications within the app, testing through the Firebase Console or tools like Postman, and customizing notification appearance with icons, sounds, and vibration patterns.

`Firebase Remote Config`, accessed in Flutter via the firebase_remote_config plugin, enables dynamic app behavior and appearance changes without app updates. This involves adding the plugin, initializing the service, defining default parameter values in the console or code, fetching and retrieving remote parameters, and updating those parameters either through the console or by activating fetched values, allowing for A/B testing and feature control.

`Storage` - In Flutter, you can use Firebase Storage to store and retrieve binary data, such as images, audio files, and videos. Firebase Storage is a cloud-based storage service provided by Firebase that makes it easy to store and serve large binary data, such as images and videos, in your Flutter app.

To use Firebase Storage in your Flutter app, you need to first create a Firebase project in the Firebase Console and then add the Firebase Storage package to your Flutter app.
