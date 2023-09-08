# EVENT based feature communication

### Rationale
In a fast growing application with many developers is one of the most challenging part is adding and changing new features. These features can be small and big as well and all of the developers could have different opinion regarding prop-drilling, context, state managers and other solutions. What is okay if at least the teams are agreed and strictly following recommendations (if exists).

While teams maintain ownership over their respective code segments, establishing communication between features, especially those developed by different teams, can be cumbersome using conventional methods, particularly when dealing with closure-based solutions like context state managers.
### Proposal
Events, which have been fundamental to JavaScript interaction (for instance, onClick), present a robust solution. They're inherently asynchronous owing to the event loop, and countless events can be activated in mere seconds.

Imagine an application with components such as a header, list, details, picture, and a modal window. These might be introduced at different stages in the project lifecycle. For example, if the list is introduced first and contains several items, an event like 'onSelectItem' can be defined.

Subsequent features could involve displaying an edit modal, details box, or picture, and these can be structured similarly to context. However, when new requirements arise, like adding edit buttons to the details section and even the header, the real challenge emerges. Should a new context be created? Should components be relocated? Or should every new prop or functionality involve prop-drilling?

A potential remedy is to equip these components or features with Listeners (for responding to requests) and Dispatchers (for initiating requests). This ensures a more flexible coupling not bound strictly by scopes.

Moreover, if there's a shift towards a micro-frontend approach, this becomes a recommended method for seamless communication between micro-frontend segments.

#### Feature Implementation
- UI segregation using useFeature hooks (refer to code for details)
- 'useFeatures' delineates Listeners/Dispatchers and the associated business logic.
- Events employ specific 'event-name' constants to highlight capabilities and prevent event name discrepancies.

### PROS
- Enhances component decoupling
- Offers teams the autonomy to define their internal logic, while events serve as a communicative interface for cross-team collaboration.
- Reduces potential code conflicts when integrated correctly
- Universally supported by browsers without the need for external libraries

### CONS
- Requires a paradigm shift in thinking.
- Inconsistencies in event naming can lead to confusion.


