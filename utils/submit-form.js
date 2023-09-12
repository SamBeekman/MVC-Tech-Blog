document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('#submit-button');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve the comment data from the form, including the poster details (e.g., username, comment text).

        // Retrieve comment data from the form (e.g., username and comment text)

        const commentText = document.querySelector('#comment').value;
        console.log(commentText);

        // Create an object with the comment data
        // const commentData = {

        //     commentText: commentText,
        // };
        
        // Use an API call to send the comment data to your server for database insertion.



        window.location.reload();
    });
});
