
import PropTypes from 'prop-types';

export default function Reliver({rv}: {rv: String}) {
  return (
    <div>reliver {rv}</div>
  )
}

Reliver.propTypes = {
  // Use a custom function for specific logic like length
  rv: function(props: { [x: string]: any; }, propName: string | number, componentName: any) {
    const value = props[propName];

    // 1. Check if it exists (isRequired)
    if (value === undefined || value === null) {
      return new Error(`${propName} is required in ${componentName}`);
    }

    // 2. Check if it is a string
    if (typeof value !== 'string') {
      return new Error(`${propName} must be a string in ${componentName}`);
    }

    // 3. Check length
    if (value.length <= 10) {
      return new Error(`${propName} must be longer than 10 characters in ${componentName}`);
    }
  }
};