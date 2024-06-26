document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    const name = url.searchParams.get('name') || 'we';
    document.getElementById('sentername').textContent = name;
    
    document.getElementById('sentyours').addEventListener('click', () => {
        window.location.href = 'sender.html';
    });
});