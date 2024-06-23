// Requirements
// 'State' to track sorting
// 'click' eventHandler at the header
// direction icons
// sorting logic (we took of this in use-sort)

// Process
// We will receive data and config from TablePage component
// Look at each object in the config
// Does the object has a sortvalue()?
// If so, the column is sortable
// If it is sortable, we should add an header property that will show a clickable header cell
// When the user clicks this, sort the data and pass the sortData down to the table

// Okay. Lets try to answer this question? With the knowledge that you have on 'State' how would have you approached this? We would have declared a State. Everytime we sort, we update the State and return it as sorted data. Quite simple isn't it? But is it?
// Nooooo. Why? Because unlike just updating changes with State, we have to do one more important thing. We have to keep track of the change too. See, it is a cycle. When the user clicks the header for the first time, we will sort by ascending order and the next click will lead to descending order and the next click will lead to unsorted order. Without knowing at what order we are in, we can't proceed with the next.
// Also please do remember that we have keep track of icons that changes with these clicks.

// Solution
// We need 2 states. Refer useSort component


import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";
import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  // So this is where we are adding header() property to the config (i mean the updated config) if the sortValue() exists for a particular column. 
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
  // Here ...props already has a config prop from the TablePage. But the next config prop that we send will over-ride the previous one. So now worries. But in keep in mind that, order matters.
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <IoIosArrowUp />
        <IoIosArrowDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <IoIosArrowUp />
        <IoIosArrowDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <IoIosArrowUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <IoIosArrowDown />
      </div>
    );
  }
}

export default SortableTable;
