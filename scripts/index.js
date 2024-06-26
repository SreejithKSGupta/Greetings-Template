document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(window.location.href);
    let name = url.searchParams.get('name')
    if (name!= null) {
        name = name + "Wishes";
    }
    else {
        name = "We wish";
    }
    document.getElementById('sentername').textContent = name;
    
    document.getElementById('sentyours').addEventListener('click', () => {
        window.location.href = './sender.html';
    });
});
