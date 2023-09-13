document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('#create-button');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        const postTitle = document.querySelector('#post-title').value;
        const postContent = document.querySelector('#post-content').value;
        console.log(postTitle);
        console.log(postContent);


        if (postTitle && postContent) {
            const response = await fetch('/api/users/userpost', {
                method: 'POST',
                body: JSON.stringify({ postTitle, postContent }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to create post');
            }
        }

    });
});
