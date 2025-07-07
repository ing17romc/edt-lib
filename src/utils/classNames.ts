type ClassValue = 
  | string 
  | number 
  | boolean 
  | null 
  | undefined 
  | Record<string, boolean | null | undefined | string | number>
  | ClassValue[];

/**
 * Función utilitaria para combinar nombres de clases CSS de manera condicional.
 * Reemplaza la dependencia 'classnames' manteniendo la misma funcionalidad.
 * 
 * @param {...ClassValue} args - Clases CSS a combinar. Pueden ser strings, objetos o arrays.
 * @returns {string} Cadena con las clases combinadas.
 * 
 * @example
 * // Uso básico
 * classNames('foo', 'bar'); // => 'foo bar'
 * 
 * // Con objetos para condiciones
 * classNames({ 'foo': true, 'bar': false }); // => 'foo'
 * 
 * // Mezclando diferentes tipos
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
