function toggleFollow() {
    const followBtn = document.getElementById('followBtn');
    const heading = document.getElementById('heading');

    if (followBtn.textContent === 'Follow') {
        followBtn.textContent = 'Unfollow';
        heading.textContent = 'Friends';
    } else {
        followBtn.textContent = 'Follow';
        heading.textContent = 'Strange';
    }
}