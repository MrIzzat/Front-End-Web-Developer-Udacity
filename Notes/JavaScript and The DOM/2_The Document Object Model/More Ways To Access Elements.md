The previously mentioned three methods used to select elements:

* `.getElementById()`
* `.getElementsByClassName()`
* `.getElementsByTagName()`

Are all standardized DOM methods. Currently, these three are supported by every browser. But, there are hundreds of other methods that may or may not have support on browsers. That's why on the MDN website, there is a browser compatibility table that shows which browser supports that specific method and at what version.

In the past, JavaScript code had to be written in a way that takes into account the possible browser that may run the code. Different browsers used different ways of executing a function as not every function is supported for every browser.

The **jQuery** library came along to help mitiage these issues. The library handled the different ways a method is supposed to run based on the browser instead of having to do it manually. A developer would have to use jQuery specific functions to do be able to make use of this feature.

Nowadays, jQuery is being replaced by newer native DOM methods, because most browsers are following more standardized functions.