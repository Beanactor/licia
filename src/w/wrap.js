/* Wrap the function inside a wrapper function, passing it as the first argument.
 *
 * |Name   |Type    |Desc            |
 * |-------|--------|----------------|
 * |fn     |*       |Function to wrap|
 * |wrapper|function|Wrapper function|
 * |return |function|New function    |
 */

/* example
* var p = wrap(escape, function(fn, text) {
 *     return '<p>' + fn(text) + '</p>';
 * });
 * p('You & Me'); // -> '<p>You &amp; Me</p>'
 */

/* module
 * env: all
 * test: all
 */

_('partial');

exports = function(fn, wrapper) {
    return partial(wrapper, fn);
};
