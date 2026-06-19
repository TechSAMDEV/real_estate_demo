// js/components.js

async function loadComponents() {
    // 1. Define the components we want to load
    const components = [
        { id: 'nav-placeholder', file: 'components/navbar.html' },
        { id: 'footer-placeholder', file: 'components/footer.html' }
    ];

    // 2. Loop through and fetch them
    for (const comp of components) {
        const element = document.getElementById(comp.id);
        if (element) {
            try {
                const response = await fetch(comp.file);
                if (response.ok) {
                    const html = await response.text();
                    element.innerHTML = html;
                } else {
                    console.error(`Could not load ${comp.file}: ${response.statusText}`);
                }
            } catch (error) {
                console.error(`Error fetching ${comp.file}:`, error);
            }
        }
    }
}

// 3. Run the function when the page finishes loading
document.addEventListener('DOMContentLoaded', loadComponents);