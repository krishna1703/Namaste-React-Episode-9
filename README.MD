# Namaste React ❤️

# Episode - 8 Optimizing Our App 🚀

# planning for the food ordering web app 🍴

- Header
- log0
- Nav-items

      - Body
        - Search
        - Restaurant Container
        - Restaurant card

- Footer
- copyright
- links
- Address

 # Optimizing Our App
 - hooks(function) gives  us readability and reusabiltity and maintainability and testability 
 - it is easy to debugging

 # modularity
- modularity means we have broken down code into meaning full piecess .

# let's talk about custom hook
-  when you build your custom hooks always start with "use" keyword.
- use keyword reserve for the hooks(in react ) 
- use....name of the custom hook

# single-responsibility principle
-  the single-responsibility principle is a computer programming principle that states that " a module should be responsible to one , and only one actor 

- Advantage = readability and reusabiltity and maintainability and more testable

# lets talk about the Lazy loading  very imp for optimizing webapp
- Dynamic bundling , lazy loading,  chunking,  code splitting , Dynamic Bundling , Dynamic import   

- in simple terms lazy loading is a design pattern it allows you to load parts of your application on-demand  and  to reduce the initial load time.....

- import{lazy} from "react";
 const component = lazy(()=> import("component's  path") )

  <suspense fallback={< loading />} >
  <Component>
  </suspense>

 # <suspense>
-  <suspense> lets you display a fallback untill its children have finished loading ;

# fallback
- An alternate ui to render inplace of the actual ui if it has not finished loading any valid react node is accepted though in pratice a fallback is a lightweight placeholder view , such as a (loading spinner) or simmer ui  