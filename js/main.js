document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('property-grid');
    const searchInput = document.getElementById('search-input');
    const locationFilter = document.getElementById('location-filter');

    if (!grid) return; // Exit if there's no grid

    function renderProperties() {
        grid.innerHTML = '';

        // If we are on index.html, we might want to slice(0, 3) to show only "Featured"
        // Let's keep it simple for now: filter then render
        const filtered = properties.filter(p => {
            const searchVal = searchInput?.value.toLowerCase() || '';
            const locVal = locationFilter?.value || 'All';
            const matchesSearch = p.title.toLowerCase().includes(searchVal);
            const matchesLocation = (locVal === 'All') || (p.location.toLowerCase().includes(locVal.toLowerCase()));
            return matchesSearch && matchesLocation;
        });

        // Use .slice(0, 3) if you only want 3 featured items on the home page
        const displayList = window.location.pathname.includes('index') ? filtered.slice(0, 3) : filtered;

        displayList.forEach(prop => {
            grid.innerHTML += `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <img src="${prop.image}" alt="${prop.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2">${prop.title}</h3>
                        <p class="text-blue-600 font-semibold mb-2">${prop.price}</p>
                        <p class="text-gray-500 text-sm mb-4">${prop.location}</p>
                        <a href="details.html?id=${prop.id}" class="block text-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                            View Details
                        </a>
                    </div>
                </div>
            `;
        });
    }

    if (searchInput) searchInput.addEventListener('input', renderProperties);
    if (locationFilter) locationFilter.addEventListener('change', renderProperties);

    renderProperties();
});