document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('#submit-button');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const commentText = document.querySelector('#comment').value;
        console.log(commentText);

        if (commentText) {
            const response = await fetch('/api/users/usercomment', {
                method: 'POST',
                body: JSON.stringify({ commentText }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to create comment');
            }
        }
    });
});
