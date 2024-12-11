// Document Object Model(DOM):
    // DOM is a programming interface(API) for web documents
    // It represents the HTML or XML document in a tree - like structure in which each part of the document, such as elements, attributes, and text, is represented as an object.
        // Document - HTML / XML file
        // Object - Elements, attributes, texts, etc.
        // Model - Tree
    // This tree of objects can be manipulated through scripting languages like JavaScript to interact with and modify the content and structure of a web page.
    // The DOM is dynamic, which means that it can be updated in real time. When a web page loads, the browser creates the initial DOM structure based on the HTML content. However, you can use JavaScript to dynamically add, modify, or remove elements and attributes, and these changes will be reflected in the DOM and on the web page.
    // Browsers use a process called parsing to convert HTML/XML documents into a DOM tree. This process involves reading the document's source code, interpreting the tags and their attributes, and creating corresponding DOM objects.
    // In web - development parsing refers to the examination and interpretation of code or data in a structured format.
// DOM selection:
    // document.getElementById - Name of the id. 
        const image = document.getElementById('unicorn') 
            // You are storing the object that you have obtained in a variable named image.
            // IDs must be unique. If you assign the same ID to multiple elements, it violates the HTML specification.
            // But you wont encounter any error because, browsers are designed to handle such situations gracefully where they return first element in the document 
    // document.getElementsByTagName - Name of the element. It returns a HTMLCollection.
        const allImages = document.getElementsByTagName('img');
        console.log(allImages)
        for (let img of allImages) {
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
        } // This will replace all the images source in the web page with the above source 
    // document.getElementsByClassName - Name of the class. It returns a HTMLCollection.
        const squareImages = document.getElementsByClassName('square');
        for (let img of squareImages) {
            img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
        }
    // document.getElementsByName - "name" attribute of the element. It returns a NodeList.
        const elements = document.getElementsByName('exampleName');
        console.log(elements); 
    
    // query selector
        const link1 = document.querySelector('p');
        // It exactly does the same job as above
            // Same keyword for everything - queryselector and you pass #p for id, .p for class
            // Whatever tags that we use in css, can be used here.  
            // But only the first match will be selected (even if it has 10 paragraphs, only the first one will be selected)
        const link2 = document.querySelector('p:nth-of-type(2)');
            // To select a particular p, you can use this
        const link3 = document.querySelector ('a[title="Java"]');
            // Selecting an anchor tag with the title Java
            // Remember this syntax. This is how we access an attribute of an element
    // query selectorAll - It overcomes the above disadvantage 
        const links = document.querySelectorAll('p a');
        console.log(links)
            // This is how we access child element (a) of a parent element (p) = > parent element 'space' child element 
        for (let link of links) {
            console.log(link.href)
        }
// In the case of the first four methods (getElementById, getElementsByTagName, getElementsByClassName, querySelector), they directly return the element(s) or collection of elements that match the specified criteria. querySelectorAll and getElementsByName returns a static NodeList of all elements that match the specified CSS selector. It is an array-like structure which are all objects by the way. You can iterate over them but cannot perform operations that you typically perform with array.
// NodeList vs HTMLCollection:
    // 1. Live vs. Static:
        // NodeList: Can be live or static, depending on how it is generated.
        // HTMLCollection: Always live.
    // 2. Methods:
        // NodeList: Offers more generic array methods for versatile manipulation.
        // HTMLCollection: Has specific methods tailored to working with HTML elements.
    // 3. Node Types:
        // NodeList: Can contain various node types.
        // HTMLCollection: Primarily contains element nodes.
            // Under everynode we have elements, attributes, text, comments, etc. (pretty much everything comes under node and element node is just one part of it)
    // 4. forEach:
        // NodeList: It has forEach method
        // HTMLCollection: It doesn't have forEach method

// Note: If you want to know what are all the properties does a specific element carry, use the following command after assigning it to a variable
        // const variableName = document.selectionMethodName ('elementName')
        // console.dir(variableName)
        // Example:
            // const btn = document.querySelector ('button')
            // console.dir(btn)
        // console.dir(document); will give entire structure of the document
