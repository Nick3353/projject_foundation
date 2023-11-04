const comments = document.querySelectorAll('.comment');
let currentCommentIndex = 0;
const autoSlideInterval = 5000; // Set the interval in milliseconds (5 seconds in this example)

function showComment(index) {
    comments.forEach((comment, i) => {
        if (i === index) {
            comment.style.display = 'block';
        } else {
            comment.style.display = 'none';
        }
    });
}

function autoSlide() {
    currentCommentIndex = (currentCommentIndex + 1) % comments.length;
    showComment(currentCommentIndex);
}

// Show the first comment when the page loads
showComment(currentCommentIndex);

setInterval(autoSlide, autoSlideInterval);
