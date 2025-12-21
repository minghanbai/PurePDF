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
    const navLinks = document.querySelectorAll('.nav-link');

    // 判斷當前頁面以設定 Active 狀態 (包含 index.html 和其他工具頁面)
    // 這裡我們手動定義頁面與 href 的對應，確保精確
    const pageMap = {
        'pdf_reorder.html': 'pdf_reorder.html',
        'pdf_to_jpg.html': 'pdf_to_jpg.html',
        'pdf_booklet.html': 'pdf_booklet.html',
        'jpg_to_pdf.html': 'jpg_to_pdf.html', // 新增
        'about.html': 'about.html'
    };

    // 找出當前對應的 key
    let activeHref = '';
    for (const [page, href] of Object.entries(pageMap)) {
        if (currentPath.includes(page)) {
            activeHref = href;
            break;
        }
    }

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === activeHref) {
            link.classList.add('text-blue-600');
            link.classList.remove('text-gray-600');
        }
    });
});