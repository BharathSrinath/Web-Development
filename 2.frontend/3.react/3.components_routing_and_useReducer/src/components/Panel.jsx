import classnames from 'classnames';

function Panel({ children, className, ...rest }) {

  // Just behaves like a provider component that we have used in booksproject with context
  // There we have listed out all the components for which many children may need access. 
  // Here, we are just trying to reuse few className's (that are repeated) with the help of 'classnames'.
  const finalClassNames = classnames(
    'border rounded p-3 shadow bg-white w-full',
    className
    // This will combine the classname (border rounded p-3 shadow bg-white w-full) with className prop (whih will have other styling from Tailwind css) 
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
