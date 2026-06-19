document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the ID from the URL (e.g., details.html?id=1)
    const params = new URLSearchParams(window.location.search);
    const propId = parseInt(params.get('id'));

    // 2. Find the property in your data
    const property = properties.find(p => p.id === propId);

    if (property) {
        document.getElementById('prop-image').src = property.image;
        document.getElementById('prop-title').innerText = property.title;
        document.getElementById('prop-price').innerText = property.price;
        document.getElementById('prop-location').innerText = property.location;
    }

    // 3. Handle Booking/Inquiry Form
    const leadForm = document.getElementById('lead-form');
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = leadForm.querySelector('input[type="text"]').value;
        const email = leadForm.querySelector('input[type="email"]').value;

        // In a real app, you'd send this to an API. 
        // For your demo, we show a success state.
        alert(`Thank you, ${name}! Your inquiry for "${property.title}" has been sent. We'll contact you at ${email} soon.`);
        leadForm.reset();
    });
});