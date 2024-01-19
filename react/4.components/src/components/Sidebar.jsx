import Link from './Link';

function Sidebar() { 
  const links = [
    { label: 'Dropdown', path: '/' },
    // When you just have '/' as path, that will be the homepage
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        // Always think about key prop when we are not getting data from a database.
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label} 
        {/* This will just display plain text without above props. We are passing the props to another component called 'Link' */}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
