// layout.js - 動態載入外部 Header 與 Footer HTML

document.addEventListener("DOMContentLoaded", async () => {
    
    // 1. 定義載入函式
    const loadComponent = async (url, elementId, position) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to load ${url}`);
            const html = await response.text();
            
            // 插入 HTML
            document.body.insertAdjacentHTML(position, html);
        } catch (error) {
            console.error('Layout loading error:', error);
        }
    };

    // 2. 並行載入 Header 與 Footer
    await Promise.all([
        loadComponent('header.html', 'header-placeholder', 'afterbegin'),
        loadComponent('footer.html', 'footer-placeholder', 'beforeend')
    ]);

    // 3. 設定年份
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 4. 設定導航列 Active 狀態 (高亮當前頁面)
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link'); // 選取所有導航連結

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 判斷邏輯：如果當前路徑包含 href (例如 pdf_reorder.html)
        // 或者當前是首頁且 href 是 index.html (或是 / )
        if (currentPath.includes(href) && href !== 'index.html') {
            setActive(link);
        } else if (href === 'about.html' && currentPath.includes('about.html')) {
            setActive(link);
        }
    });

    function setActive(link) {
        link.classList.add('text-blue-600');
        link.classList.remove('text-gray-600');
    }
});