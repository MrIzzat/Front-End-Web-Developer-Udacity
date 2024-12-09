# Event Phases

There are three different phases during the life cycle of an event:

* The **capturing** phase
* The **at target** phase
* the **bubbling** phase

The order that is followed is the same as the three points.

Most event handlers are run during the **at target** phase, an example is when attaching a click event handler to a button. When the event arrives ath the target (the button), there is only a handler for it in the target so the event handler gets run.

In some cases, there are a collection of items (like a list) that need a single handler to cover every item while still having the option of individual handlers for some of the items. By default, if a child item fires off an event but the handler doesn't intercept it, the event will **"bubble"** upward to the parent, where the parent's handler event intercept it. If there is no intercepter at the parent level, the event keeps bubbling upwards on the DOM tree until an event handler intercepts it or it hits the top of the DOM (the document).

**Caputring** allows the parent event handler intercept the event before it reaches the child event handler.