import SortableTable from '../components/SortableTable';

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
    { name: 'Cherry', color: 'bg-red-700', score: 2.5 },
  ];

  // Number  of objects in config is based on number of columns that you want in a table
  // label will the 'th' of the table (above data has the contents of the table and not the headers)
  // Adding sortValue function to every column that we want it to be sortable
  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: 'Score Squared',
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;

// Table building - Making it reusable
// 1. Variable number of rows/columns
// 2. Making the columns sortable
// 3. Number of columns doesn't have to match number of properties in an object 
  // That is some objects can have 5 properties and some can have 4 properties.
// 4. Deriving cells value based on other cells
// 5. Making cells display arbitrary values 


// Content flow: TablePage => SortableTable (makes use of use-sort) => Table