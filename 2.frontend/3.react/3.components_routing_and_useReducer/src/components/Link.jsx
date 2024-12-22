import classnames from 'classnames';
import useNavigation from '../hooks/use-navigation';

// The goal of the Link component is primarily to prevent the default behaviour of an anchor tag.
// Then, we want the user to navigate to specific route for which we need access to navigate().
// If we want to include any links in future that should be redirected to some other web page with differentt domain name, we will not place it here.

function Link({ to, children, className, activeClassName }) {
  // We are receiving the props from Sidebar component 
  const { navigate, currentPath } = useNavigation();

  const classes = classnames(
    'text-blue-500',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    // When we click on the link, its default behvaviour is to load the page with new data and holding the ctrl/cmd key will open a new tab with new data. 
    // When we hold ctrl/cmd and then click on the link, we want the default behaviour to happen. (browser by default knows where to navigate based on the click. So they do not need to access for 'navigate(to)')
    // If not (not holding ctrl/cmd), we are preventing that with preventDefault().
    event.preventDefault();
    // Now the navigation will happen without reload.
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {/* We know that href contains the link where we ought to navigate. Here {to} is determined by 'onClick' */}
      {children}
    </a>
  );
}

export default Link;
