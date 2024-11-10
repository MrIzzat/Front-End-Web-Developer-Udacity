# Removing an Event Listener

Sometimes, an event needs to be removed after being executed. For example, when an event should only trigger after the first click. Using `addEventListener()` will activate the listener function every time a click occurs. The `removeEventListener()` function can be used to remove that event after the first click occurs, achieving the desired goal.

The newest version of `addEventListener()` allows for a third parameter thta can be used to configure how the `addEventListener()` behaves, including adding an option to listne in for only one event. But this is not widley supported.