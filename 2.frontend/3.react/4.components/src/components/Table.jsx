import { Fragment } from 'react';

function Table({ data, config, keyFn }) {
  // We are having 3 return statemenets for 3 props.
  const renderedHeaders = config.map((column) => {
    // This deals with header of the table.
    // You know that the top parent element of the return statement should have key-prop since we are building a list of elements. Here we just have one statement. Hence key-prop is necessary for that.  
    if (column.header) {
      // See for most projects we wont always use a simple label as the header. Sometimes we might what to make them bold or place them between 'h1' and so on. So here what we are trying to do is, if we have any other functionality apart from displaying label as the header, we will call the header() and have all our additional featurs under it.
      // As you would have processed by now, yes we can add header() to the config too. But since we want to listen to click events on the header, we are using it in the SortableTable component. (so that config need not be cluttered) 
      
      // Here if condition checks whether column (an object) has a header property. If so we will call the header().  
      return (
        <Fragment key={column.label}>
          {column.header()}
        </Fragment>
      );
      // Why aren't we wrapping it under <th> here? 
      // This is because, we can't have any element apart from table related elements within a table like 'div'. Also we can't return a <th> within a <th> (here header() returns a <th>).
      // To overcome this, we are using fragments. They are the same thing that we have already used to group the return statemenets together. <>...</>
      // But to give a key-prop we cant use the above short-hand. Hence we have specify the word fragment. To use this word, we have to import it.
      // Fragment lets you group a list of children without adding extra nodes to the DOM.
    }

    return (
      <th key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    // First map() is iterating over array contents (that is objects)
    const renderedCells = config.map((column) => {
      // Second map() is iterating over objects (contents of the objects)
      // Typically without config, the above code would have been const renderedCells = renderedRows.map((column)
      // But we are using config to make the table as reusable as possible
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
          {/* Lets say that we haven't  used config. Above statement woudl have been 'column.name' */}
          {/* Now this expecting the table should have a rowData called 'name'. Now when we are creating a new table, we have to change this too. But nowwe we need not touch this component at all */}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {/* we already gave key-prop for the headers. Above deals with cells content of the table. */}
        {/* Initially we had key = {rowData.name}. Eventhough technically it is right, we shouldn't use that (not a good practice). */}
        {/* Because we are trying to make this table as resusable as possible. In future, if this component is used for different table, we might not even have a property called name. So we will leave that to the future developers. They will decide what data to be used as a key-prop.  */}
        {/* We are creating a keyFn in TablePage which returns 'fruit.name' when it is called. */}
        {/* When you look at this component, you cant figure out for what purpose this table is designed. We have made it very generic and hence reusable for any type of content. */}
        {/* Only pre-requesite to use this component is that, table data should be an 'array of objects'. */}
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
