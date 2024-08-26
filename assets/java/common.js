 
document.addEventListener('DOMContentLoaded', () => {
    // Select all list items
    const listItems = document.querySelectorAll('.listbox a');
    
    // Get the current URL path
    const currentPath = window.location.pathname;

    listItems.forEach(item => {
        // Get the href attribute of the current list item
        const href = item.getAttribute('href');

        // Check if the href matches the current URL path
        if (currentPath.endsWith(href)) {
            item.classList.add('selected'); // Add the 'selected' class
        }

        // Optional: Add click event to highlight the selected item
        item.addEventListener('click', () => {
            listItems.forEach(el => el.classList.remove('selected')); // Remove 'selected' from all items
            item.classList.add('selected'); // Add 'selected' to the clicked item
        });
    });
}); 