# Real World Examples of Asynchronous JavaScript

Before the creation of asynchronous JavaScript code, in order to run code that would need to do certain actions that require async such as querying a database, a series of long callback functions would need to be created and used. If a single error is raised, the entire process would crash.


Asynchronous code allowed for:

* Much cleaner and shorter code
* Error in one code block would not affect or block other poritons of code
* Debugging code is much easier because there are more specific can helpful error messages.

Asynchronous code can help organize code into discrete parts that can fail or succeed on their own without breaking the rest of the program. Async JavaScript also allows for the waiting of one command to be completed before executing the next. In other words, it allows for the completion of one line of code no matter how long it takes before moving on to the next one.