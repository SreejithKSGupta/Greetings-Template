document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('senternamebutton').addEventListener('click', () => {
        const name = document.getElementById('snameipt').value;
        if (name.trim().length > 0) {
            const url = `https://sreejithksgupta.github.io/Greetings-Template/?name=${encodeURIComponent(name)}`;
            const text = `Share this link with your friends to send them a message: ${url}`;
            const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(text)}`;
            window.location.href = whatsappUrl;
        } else {
            alert('Please enter a name');
        }
    });
});