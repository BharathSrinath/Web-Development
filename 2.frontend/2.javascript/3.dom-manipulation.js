console.log("textContent");
// 1. textContent:
    // It returns all the text content within an element, including any nested elements, regardless of whether the text is visible or not.
    // It retrieves without considering CSS styles or whether the element is hidden with CSS

const element1 = document.querySelector('p');
console.log(element1.textContent); // Retrieves all text content, including hidden elements
// element.textContent = 'New text'; ( Sets the text content)

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("innerText");
// 2. innerText:
    // The innerText property returns only the visible text content within an element. It respects CSS styles and takes into account the visibility of elements.
    // It retrieves or sets the text content as it appears on the screen, considering the rendering of CSS styles and ignoring hidden elements.

const element3 = document.querySelector('p');
console.log(element3.innerText); // Retrieves only visible text content

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log("innerHTML");
// 3. innerHTML:
    // Unlike textContent and innerText, which deal with the text content of an element, innerHTML allows you to work with the entire HTML structure and content within an element.

const element4 = document.querySelector('p');
console.log(element4.innerHTML);

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log ("Attributes")
// Attributes - Understanding their usage
// You can even change the values of attribute using DOM
// Method 1:
    // Example 1: 
        // document.querySelector('#banner1').id = banner2
            // Need to handle the name change of id with care. You might have certain properties in CSS for a particular id. When you change the name everything will be lost or if your newly given id has been defined elsewhere, those properties will apply. 
    // Example 2: 
        // document.querySelector('#banner1').src = 'https://www.youtube.com/watch?v=_pEI3p2EuR8&ab_channel=AnirudhRavichander-Topic'
            // Here using the id, we are changing the attributes value associated with it.
    // Example 3: 
        // const dummy = document.querySelector ('input [type = "text"]')
        // dummy.type // This will display the type of input (text in this case)
        // dummy.type = 'password' // Now we have updated the type to password from text
// Method 2:
    // dummy.getAttribute ('href')
    // dummy.setAttribute ('href', 'https://www.youtube.com/watch?v=_pEI3p2EuR8&ab_channel=AnirudhRavichander-Topic')

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log ("Styles")
// Styles
// Syntax: 
    // const name = document.any_selector('element'); 
    // name.style.property
// Example:
        // const topHeader = document.querySelector ('h1');
        // topHeader.style.color

const allLinksPara = document.querySelectorAll('p a');
for (let link of allLinksPara) {
    console.log(link.innerText) // This line is just to see the texts of the links within paragraph  
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// Rainbow Problem
// Please write a code to make the content rainbow colored in the lines 91 to 97 in HTML! 
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 

const heading = document.querySelectorAll('h1 span');
let i = 0;
for (let rainbow of heading){
    rainbow.style.color = colors[i];
    i++;
}

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log ("ClassList")

// ClassList
// It represents a collection of classes in an HTML element. It provides methods and properties that allow you to easily manipulate and work with the classes of an element. Here's a detailed explanation of the classList property:
// 1. Accessing classList:
    const element5 = document.querySelectorAll('li');
    for (let list of element5){
        console.log(list.classList);
    }
    // This will provide you list of all the classes within 'li' element 
    
// 2. classList Methods: 
const element6 = document.querySelectorAll('h1');
for (let list of element6){
    list.classList.add('purple'); // Adding a class
    // The class name 'purple' will be created and added to the element if it doesn't already exist.
    // You can also add multiple classes as a single element can have multiple classes
        // element.classList.add('class1', 'class2', 'class3');
    list.classList.remove('list'); // Removing a class
    list.classList.toggle('purple'); // Toggling a class. If it is off, it will turn it on (true) and vice versa (false)
    const hasClass = list.classList.contains('border'); // Checking if a class exists
    console.log(hasClass);
    // list.classList.replace('oldClass', 'newClass'); // Replacing a class
}
// 3. Properties of a classList
let sum = 0;
for (let list of element5){
    sum += list.classList.length;
}
// We have found the total number of classes using length property
console.log (sum);
    // It returns the number of calsses
for (let list of element5){
    console.log(list.classList.value)
}
// We have printed the value of the class (read it as name) using value property 

// Very important - There is something called as className which also adds class attribute to the element. But there is a difference and it is huge.
// pokemon.classList.add('pokemon'):
    // classList is a property of an element that provides an interface to manipulate the classes of the element.
    // It adds the specified class to the element's list of classes.
    // If the element already has the class 'pokemon', it will not add it again; it ensures that each class in the list is unique.
    // You can also use classList.add('class1', 'class2') to add multiple classes to the element in a single operation.
    // It provides additional methods like remove(), toggle(), and contains() for more advanced class manipulation.
// pokemon.className = 'pokemon':
    // It is a property of an element that gets or sets the entire list of classes for the element.
    // When you use pokemon.className = 'pokemon', it overwrites the entire list of classes for the element with just the class 'pokemon'.
    // If the element had any other classes before, they will be removed, and only 'pokemon' will remain. 

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log ("Traversing")
// Traversing the DOM
// Before getting into it you have understand the difference between element and node 
// The tree like structure of DOM is made up of nodes. You get the tree structre using console.dir(document) and for the structure of body you can use console.dir(document.body)
// Nodes comprises of document, elements, attributes, texts, comments. As you see elements are nodes too. Thay are a part of it.  
// So when you use selector methods, there can be 2 types of return values
    // 1. Element Objects - We need to use getElementById() and querySelector() to get the element object
        // They return a single element if it exists and null if they don't
    // 2. Node Objects - getElementsByClassName(), getElementsByTagName(), querySelectorAll() and getElementsByName()
        // They return a collection of elements
            // a) NodeList - All nodes are returned (querySelectorAll())
            // b) HTML collections - Only element nodes are retuned (other 3)

// 1. Parent and child:                                                                        
    // It allows you to access the parent of a given element.                                 
    const child = document.querySelector('div');
    console.log (child);
    const parent = child.parentElement;
    console.log (parent);
    const divsChild = child.childNodes; //NodeList 
    console.log (divsChild);
    const divsChildren = child.children // HTML collections 
    console.log (divsChildren);
    console.log (divsChildren[0]);
    // Will access the first element. Here it is the 'input' element
    // You can also do the following
        const divsFirstChild = child.firstElementChild
        console.log (divsFirstChild);
        const divslastChild = child.lastElementChild
        console.log (divslastChild);
    // This will access the NodeList and get the first child
        const divsFirsNodeChild = child.firstChild
        console.log (divsFirsNodeChild);
        const divslastNodeChild = child.lastChild
        console.log (divslastNodeChild);

// 2.Sibling node:
    const sib = document.querySelector ('ul');
    const prevEleSib = sib.previousElementSibling;
    console.log (prevEleSib);
    const nextEleSib = sib.nextElementSibling;
    console.log (nextEleSib); // This will return null as there are no 'next' sibling for 'ul'. 
// The following will access the nodes.
    const prevNodeSib = sib.previousSibling;
    console.log (prevNodeSib);
    const nextNodeSib = sib.nextSibling;
    console.log (nextNodeSib);

console.log("----------------------------------------------------------------------------------------------------------------------------------------");

console.log ("Create and Appending")
// Create and Appending
// There are 2 ways by which we can append - 'append' and 'appendChild'
// 1. Appending using 'appendChild': Append a node as the last child of a specified parent node. It takes a single argument, which is the node to be appended. It is more restrictive; can append only one node and cannot directly append text.
//  Example:
const newHead = document.createElement('span'); // Creating new element
// Defining their attributes
newHead.innerText = 'This is a new div element'; 
newHead.classList.add('myclass'); 
// Choosing the parent to which the child should be appended and selecting it using querySelector
const parentElement = document.querySelectorAll('h1'); 

// I had a mis-understanding about append, so documenting this. 
// See appending means adding a new element to a parent or moving a child from other parent to new parent.
// So the child we are dealing with (new/existing) can have only one parent. I thought the following code will append the child to multiple parents (there are scenarios where me may need that. Same kind of child under many parents to exhibit a similar behaviour). So this code will not throw error. But in the first iteration, it will move the newhead to first 'h1' and then in second iteration it will move the same child to next h1 and so on finally ending up in the last h1.   
for (let appendAll of parentElement){
    appendAll.appendChild(newHead);
}
// To achieve the intended goal, you have to create the element everytime, add attributes everytime and append them everytime as follows.
for (let appendAll of parentElement){
    const newHead = document.createElement('span');
    newHead.innerText = 'This is a new span element';
    newHead.classList.add('myclass');
    appendAll.appendChild(newHead);;
}
document.body.appendChild(newHead);
    // You can use the above command if you want to directly append to the end
// const append1 = document.querySelector('p');

// 2. Appending using 'append': It is more versatile and allows you to append multiple nodes and strings to a parent element. It can take multiple arguments, and it appends each argument in the order they are passed. It is more flexible as it can directly append text content.
// Syntax: parentElement.append(...nodes or strings)
// Example1:
const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1683009686716-ac2096a5a73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
newImg.id = 'explorer';
newImg.className = 'square'

const imgParent = document.querySelector ('.myclass');
imgParent.append(newImg);

// Example2: 
    // var parent = document.getElementById("parentElement");
    // var child1 = document.createElement("div");
    // var child2 = document.createElement("p");
    // parent.append(child1, "Text content", child2);

// 3. 'prepend'
    document.body.prepend(newImg); // Similar to 'append' but just adds it before the parent.

// 4. Adding using 'insertAdjacentElement'
    // Syntax: targetElement.insertAdjacentElement (position, element)
        // As you can see there is a new argument called position which can have 4 values
            // 'beforebegin' - before the beginning of target element (before the opening tag) 
            // 'afterbegin' - inside the target element but before its child (after the opening tag)
            // 'beforeend' - inside the target element but after its last child (before the closing tag)
            // 'afterend' - after the end of target element (after the closing tag)

// Removing element
// It can be done in 2 ways
    // Calling the parent to remove a child - Old method
        const firstLi = document.querySelector('li'); // Storing the child (to be deleted) in a variable  
        const ulist = firstLi.parentElement // Accessing the child's parent and storing them in a variable
        // Now we have both child and parent
        ulist.removeChild(firstLi) // If it is the only child, you dont need arguments
        // You can club 2 and 3 steps as 'firstLi.parentElement.removechild(firstLi)' 
    // Directly removing child - New method
        const img1 = document.querySelector('img')
        // img1.remove(); This would remove the image 
        // img1.removeChild(); // This would remove image's child 

// Example for appending: 100 Pokemons
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
    // This link when when ended with 1 to 151, will give you 151 differemt pokemons.

const container = document.querySelector('#container');

for (let variable = 1; variable <= 151; variable++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${variable}`;
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${variable}.png`

    container.appendChild(pokemon)
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
   
}
// Lets look at the working
// Selecting the #container (section) under which are going to append everything
// for-loop
    // creating a div element and assigning a class to it
    // creating a span element and giving it a innerText #1 to #151
    // creating img element with new src everytime the loop runs
// appending newImg to div with the help of .pokemon
// similarly appending the span to the div (which will technically append after the newImg)
// Finally appending the div to the section with the help of #container 