type ClassValue = 
  | string 
  | number 
  | boolean 
  | null 
  | undefined 
  | Record<string, boolean | null | undefined | string | number>
  | ClassValue[];

/**
 * Utility function to conditionally combine CSS class names.
 * Replaces the 'classnames' dependency while maintaining the same functionality.
 * 
 * @param {...ClassValue} args - CSS classes to combine. Can be strings, objects, or arrays.
 * @returns {string} String with the combined classes.
 * 
 * @example
 * // Basic usage
 * classNames('foo', 'bar'); // => 'foo bar'
 * 
 * // With objects for conditions
 * classNames({ 'foo': true, 'bar': false }); // => 'foo'
 * 
 * // Mixing different types
 * classNames('foo', { bar: true }, ['baz', { qux: true }]); // => 'foo bar baz qux'
 */
function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (arg === null || arg === undefined || arg === false) {
      continue;
    }

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg).trim());
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames(...arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (typeof arg === 'object') {
      if (arg.toString !== Object.prototype.toString) {
        classes.push(arg.toString());
      } else {
        for (const [key, value] of Object.entries(arg)) {
          if (value) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(' ').trim();
}

export default classNames;
