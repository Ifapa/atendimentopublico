(() => {
    function ensureNavToggle() {
        const nav = document.getElementById('siteNav');
        if (!nav) return;
        let toggler = document.getElementById('nav-toggler');
        if (!toggler) {
            toggler = document.createElement('p');
            toggler.id = 'nav-toggler';
            const link = document.createElement('a');
            link.id = 'toggle-nav';
            link.className = 'hide-nav';
            link.href = '#';
            link.title = 'Menu';
            const span = document.createElement('span');
            span.textContent = 'Menu';
            link.appendChild(span);
            toggler.appendChild(link);
            nav.parentNode.insertBefore(toggler, nav);
        }
        const link = toggler.querySelector('a');
        if (!link) return;
        if (!link._nfBound) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const navEl = document.getElementById('siteNav');
                if (!navEl) return;
                if (window.myTheme && typeof myTheme.toggleMenu === 'function') {
                    myTheme.toggleMenu(this);
                    return;
                }
                const hidden = window.getComputedStyle(navEl).display === 'none';
                if (hidden) {
                    navEl.style.display = '';
                    document.body.classList.remove('no-nav');
                    this.className = 'hide-nav';
                    this.title = 'Menu';
                } else {
                    navEl.style.display = 'none';
                    document.body.classList.add('no-nav');
                    this.className = 'show-nav';
                    this.title = 'Menu';
                }
            });
            link._nfBound = true;
        }
        toggler.style.display = 'block';
        toggler.style.visibility = 'visible';
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureNavToggle);
    } else {
        ensureNavToggle();
    }
})();
