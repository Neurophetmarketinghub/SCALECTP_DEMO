document.addEventListener('DOMContentLoaded', () => {
    // Select all list items
    const listItems = document.querySelectorAll('.listbox a');

    // Get the current URL path
    const currentPath = window.location.pathname;

    // Function to remove 'selected' class from all items
    const deselectAllItems = () => {
        listItems.forEach(item => {
            item.classList.remove('selected');
        });
    };

    listItems.forEach(item => {
        // Get the href attribute of the current list item
        const href = item.getAttribute('href');

        // Ensure href is absolute for comparison
        const linkPath = new URL(href, window.location.origin).pathname;

        // Check if the href matches the current URL path
        if (currentPath === linkPath) {
            item.classList.add('selected'); // Add the 'selected' class
        }

        // Add click event to highlight the selected item
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default action of the link

            deselectAllItems(); // Deselect all items
            item.classList.add('selected'); // Add 'selected' to the clicked item

            // Navigate to the clicked link
            window.location.href = href;
        });
    });
});
