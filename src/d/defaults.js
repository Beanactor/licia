/* Fill in undefined properties in object with the first value present in the following list of defaults objects.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |obj   |object|Destination object|
 * |*src  |object|Sources objects   |
 * |return|object|Destination object|
 */

/* example
 * defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function defaults(obj: any, ...src: any[]): any
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys, true);
