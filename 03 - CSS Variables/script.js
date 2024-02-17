//html variables
const inputs = document.querySelectorAll('.controls input');

//function - handle update - dragging the handles/changing color DOES SOMETHING
function handleUpdate() {
    //object that will contain all the data attributes from that element
    const suffix = this.dataset.sizing || '';
    //setting the property to be dynamic, so that the root variable changes with the changes the user makes with the handles
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

//setting up event listeners for changes and mousemovements (for color wheel)
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
