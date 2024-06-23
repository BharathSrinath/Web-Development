// Random colors
// Rather than looking at the solution, focus on the way the code is written. 
    // First you are selecting the elements on which you are expecting an event to occur\
    // Then deciding the event ('click' in this case)
    // Then look for the solution 

const button = document.querySelector('button');
const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
button.style.display = 'block';
button.style.margin = '0 auto';

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    // Here you can get the body using query selector, store that in a variable and then perform action on that variable.
    // We are using shortcut here.
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r < 40 || g < 40 || b < 40){
        h1.style.color = 'white';
    }
    else{
        h1.style.color = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`;
    // There is a hidden gem here. See when you return `rgb(${r}, ${g}, ${b})`, this is being for 2 elements. One is for h1 and the other is for body's background color
        // So what's genius about you make ask. Look carefully
        // Here, one is a text and the other is a color. But the returned result works on both.
        // This is because the text in h1 exactly follows the color declaration format. rgb (r,g,b)
            // If you want your text to be 'rgb is r, g, b' or 'color is r,g,b', it woudn't be possible
            // You need to have a new variable to assign it a different text. 
            // See this is not ground-breaking stuff. But it is these moments that will carry you forward as a programmer.   
}

