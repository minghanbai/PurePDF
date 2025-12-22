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
    // 同時選取桌面版 (.nav-link) 與 手機版 (.nav-link-mobile) 的連結
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');

    const pageMap = {
        'pdf_reorder.html': 'pdf_reorder.html',
        'pdf_to_jpg.html': 'pdf_to_jpg.html',
        'jpg_to_pdf.html': 'jpg_to_pdf.html',
        'pdf_booklet.html': 'pdf_booklet.html',
        'pdf_redact.html': 'pdf_redact.html', // 新增
        'about.html': 'about.html'
    };

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
            // 根據不同 class 給予不同的 active 樣式
            if (link.classList.contains('nav-link')) {
                link.classList.add('text-blue-600');
                link.classList.remove('text-gray-600');
            } else if (link.classList.contains('nav-link-mobile')) {
                link.classList.add('bg-blue-50', 'text-blue-600');
            }
        }
    });

    // 5. 手機版選單互動邏輯
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            // 切換選單顯示
            mobileMenu.classList.toggle('hidden');
            
            // 切換圖示 (三條線 <-> X)
            const icon = mobileBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });

        // 點擊選單項目後自動關閉選單 (優化體驗)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
});