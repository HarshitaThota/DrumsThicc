
document.addEventListener('DOMContentLoaded', function() {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
    });


});

    