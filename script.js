document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const billingToggle = document.getElementById('billingToggle');
    const prices = document.querySelectorAll('.price');

    if (billingToggle && prices.length) {
        const updatePricing = (yearly) => {
            billingToggle.classList.toggle('active', yearly);
            billingToggle.setAttribute('aria-pressed', String(yearly));

            prices.forEach((price) => {
                const rawValue = yearly ? price.dataset.yearly : price.dataset.monthly;
                price.textContent = rawValue ?? '0';
            });
        };

        billingToggle.addEventListener('click', () => {
            const isYearly = !billingToggle.classList.contains('active');
            updatePricing(isYearly);
        });

        updatePricing(false);
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
