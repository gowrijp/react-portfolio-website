https://www.youtube.com/watch?v=iOmHEbMexqI
```
ReactJS (library)

open cmd in ur desired folder
npx create-react-app projectname
cd projectname 
npm start (This will make your website go live on localhost)

Right now react is the most used front end framework,it has a fast learning curve
Reusable components
Fast Render with virtual DOM, Proper modularisation
Easier to lrn React Native(used for building Android and iOS apps) and React Desktop (for creating desktop apps) after this

App.js -> main component
One way Data Flow (Only from parent component to children)
Props -> Data which can be passed from parent to child element. 
State -> Javascript object which contains the data that we need to render on screen but it can change with time.
To transfer data between sibling components, we can use callback methods to transfer data from child to parent and once that
method is invoked, we can again transfer from parent to child(the other sibling).

> Concept of jsx - html inside javascript
> State and Props:
State : Javascript object which contains the data that we need to render on screen but it can change with time.

2 Methods to create a component :
> Write a function
> Write a class with a render method(which returns the HTML)

IMP POINTS
> If you are moving app.js to somewhere else from its default position then change the location inside index.js
> As in HTML we have <div class="name"> in React we use className instead of class

App --- Portfolio --- SideNav
                  --- SectionContainer --- About
                                       --- Skills --- SkillCard

> Map method of Javascript used to create SkillCards
> curly braces represents something like a variable or a reference to a function
> this.state only used inside the constructor otherwise we have to use this.setState

CHECK HOW TO DEPLY REACT APP 
(u have to change package.json : add "homepage": "your-webpage-url"
                   
```
