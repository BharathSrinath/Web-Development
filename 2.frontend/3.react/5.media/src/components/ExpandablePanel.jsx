import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
          {/* Every userListItem is considered to be a header */}
          {/* So when we click that header on the GoChevron icon, it should open and the users details which we are naming it as children */}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;

// When we are deleting a user, we rely on the user data to identify which user has been deleted so that we can out the data that can bee filtered out.
// But using the same strategy to determine which panel is clicked will be very complicated. 
// There is only one unique user. But number of expandable panels can be 'n' number as we can nest one inside the other. So users id can be same as that of the albums id and whih can be same that of the photos id and which can be same as that of the ....
// Hope you get the point here. So we are classifying each user into header and children. Clicking the header will display the children. 
// This will make it much more easy for us. Now clicking on the header will give us user's id. User's id can be linked to the album's id. So when you click a panel, we can fetch only those albums that are tied to the user. 