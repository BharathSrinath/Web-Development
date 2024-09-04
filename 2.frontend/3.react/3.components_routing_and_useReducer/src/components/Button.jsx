import classnames from 'classnames';
// 'classnames' allows for easier and more dynamic assignment of CSS classes to your components
// It takes any number of arguments which can be a string or object or a combination of both
// Look at the 'case'. It is different from 'className'.
import { twMerge } from 'tailwind-merge';
// In CSS, you know that order of stylings matter.  So the style that comes later will take the precedence. 
// With classnames, you are not guaranteed the above rule. Sometimes it happens, sometimes it doesn't. It depends on kind of tool that you have used to create the react project (vite, create-react-app, etc.) 
// To make sure the rule is obeyed, you have to enclose the class with twMerge. 
// Syntax: const mergedClassName = twMerge(classnames('class1', 'class2', { 'conditional-class': condition }));

function Button({
  children,
  // Anything that is present inside the opening and closing tags is considered to be children
  primary,
  // You know that these are shorthand for primary: primary, secondary: secondary, etc.
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
  // Any props apart from the above will be considered rest of the properties. Again a reminder. 'rest' is not a keyword.
  // Not related to what we are learning but still. You know that both rest and spread operators precede by 3 dots(...). Also both of them are not key words. So how does JS differentiate between them?
    // The rest operator is used in function parameter lists and destructuring assignments (in our case we are destructuring). It collects multiple elements into an array.
    // The spread operator is used in array literals and function calls. It expands an iterable (like an array or string) into its elements.
      // Example: let arr1 = [1, 2, 3];
      //          let arr2 = [...arr1, 4, 5]; // arr2 becomes [1, 2, 3, 4, 5]

}) {
  const classes = twMerge(
    classnames(
    rest.margin,
    // You can the add margin just like every other class (primary, secondary, etc.) 
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary,
      // primary, secondary, etc. will evaluate to true/false. If the value is receieved as props then it will evaluate to true, if not they are undefined which will evaluate to false.
      // Generally you woudn't have seen single/double quotes in the name of the property.
      // But since we have used characters like '-', we have to use quotes.  
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      // When we have both primary and outline as props, we want the text color to be blue so that it matches with border color.  
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    })
  );
// With respect to css rules, later properties will over-ride the former properties. But classnames library is not aware of such things. It doesn’t add classes to an element in the order that the props are passed to the component. Instead, it generates a string of class names based on the conditions you’ve defined inside the function, in the order that they’re listed.
// 

  return (
    <button {...rest} className={classes}>
      {/* So how does it work? We have the className called classes which is being passed to every button element. But all of the stylings inside the classes are not applied to the button. Rather it is dependent on the prop that we are reeceiving.*/}
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
// This logic is kinda funny and at the same time quite intelligent when you look at it. You know that everything in JS is inherently truthy/falsy. 
// Falsy values - false, 0, "" (empty string), null, undefined and Nan.
// Everything else has truthyness to it.
// So here when primary, secondary, etc. has a value other than any of the above falsy values, it is considered to be truthy. So, negating that value will mean that it is false. (not falsy but false). False is an actual value but fasly is a notation. Second negation will make it true.
// Number (true) means, true is getting converted to a number. That is 1.
// So when the count is greater than 1, ie., when there are more than one styling amoung the above 5 is added, we will print the following error. 
    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
