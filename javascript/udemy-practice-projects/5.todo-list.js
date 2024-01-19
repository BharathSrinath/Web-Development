// TODO - requirements
// new  - Add a TODO
// list - List all existing TODO's
// delete - Remove Specific TODO
// quit/q - Quit app
// The above are the key words. When you enter any of the key words after performing the task (new/list/delete/quit), it should prompt again to listen "what would you like to do"

let input = prompt ("What would you like to do?");
const todos = ['Complete HTMl', 'Complete CSS', 'Complete Java Script'];
// These are default todo's and that is why we made that as const
while (input !== 'quit' && input !== 'q')
{
        if (input === 'list')
        {
        console.log ("************");
        for (let i = 0; i < todos.length; i++)
        // You can actually use for-each loop here
        {
           console.log (`${i}: ${todos[i]}`);
        }
        console.log ("************");
    } else if (input === 'new')
    {
        const newTodo = prompt ("What is new todo?");
        todos.push (newTodo);
        console.log (`${newTodo} added to the list!`);
    } else if (input === 'delete')
    {
        const index = parseInt (prompt ("Enter an index to delete"));
        // We want to make sure that, user is entering a number as the input and they are less than the list's length
        // We are using ParseInt because, in JS, when you use the prompt function to get input from the user, the result is always returned as a string, regardless of whether the user enters a number or any other type of input. 
        if (index >= 0 && !isNaN(index) && index < todos.length)
        // See typeof(NaN) will result in a number. So if the input is a NaN we might not recognise that. So we have to eliminate that too,
        // This can be done by isNaN function in JS. The isNaN returns true if the value is not a valid number. But we want true when it returns a number. So we flip it 
        {
        const deleted = todos.splice(index, 1);
        console.log (`Ok, deleted ${deleted[0]}`);
        }
        else{
            console.log ("Enter a valid index number");
        }
    }
    input = prompt ("What would you like to do");
}
console.log ("You Quit the App!");
        