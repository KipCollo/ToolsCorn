# JavaBeans

The goal of the JavaBeans APIs is to define a software component model for Java, so that third party ISVs can create and ship Java components that can be composed together into applications by end user.

There are a range of different kinds of JavaBeans components:
1. Some JavaBean components will be used as building blocks in composing applications.So a user may be using some kind of builder tool to connect together and customize a set of JavaBean components s to act as an application. Thus for example, an AWT button would be a Bean.
2. Some JavaBean components will be more like regular applications, which may then be composed together into compound documents. So a spreadsheet Bean might be embedded inside a Web page.

The design centre for beans ranges from small controls up through simple compound documents such as Web pages.

A Java Bean is a reusable software component that can be manipulated visually in a builder tool.
The builder tools may include web page builders, visual application builders, GUI layout builders, or even server application builders. Sometimes the “builder tool” may simply be a document editor that is including some beans as part of a compound document.
