// TODO: Create a variable that selects the form element
        
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.       

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

document.getElementById('blogForm').addEventListener('submit', handleFormSubmission);

function handleFormSubmission(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const errorElement = document.getElementById('error');
    
    if (!username || !title || !content) {
        errorElement.textContent = "Please complete the form.";
    } else {
        errorElement.textContent = "";
        const blogPost = { username, title, content };
        localStorage.setItem('blogPost', JSON.stringify(blogPost));
        redirectPage('blog.html');
    }
}
function redirectPage(page) {
    window.location.href = page;
}
