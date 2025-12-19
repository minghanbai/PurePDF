// layout.js - 用於動態載入 Header 與 Footer

document.addEventListener("DOMContentLoaded", () => {
    const CURRENT_YEAR = new Date().getFullYear();
    const currentPath = window.location.pathname;
    
    // 判斷當前頁面以設定 Active 狀態 (簡單判斷檔名)
    const isReorder = currentPath.includes('pdf_reorder.html');
    const isToJpg = currentPath.includes('pdf_to_jpg.html');
    const isAbout = currentPath.includes('about.html');

    // 定義 Header HTML
    const headerHTML = `
    <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2 group">
                <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-700 transition">P</div>
                <span class="text-xl font-bold text-gray-800 tracking-tight">PurePDF</span>
            </a>
            <div class="flex gap-4 text-sm font-medium text-gray-600">
                <a href="pdf_reorder.html" class="${isReorder ? 'text-blue-600' : 'hover:text-blue-600 transition'}">合併重組</a>
                <a href="pdf_to_jpg.html" class="${isToJpg ? 'text-blue-600' : 'hover:text-blue-600 transition'}">PDF 轉 JPG</a>
            </div>
        </div>
    </nav>
    `;

    // 定義 Footer HTML
    const footerHTML = `
    <footer class="bg-gray-100 border-t border-gray-200 py-8 mt-auto">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <div class="flex items-center justify-center gap-2 mb-4 text-gray-400 text-sm">
                <i class="fa-solid fa-shield-halved"></i>
                <span>Secure Client-Side Processing</span>
            </div>
            
            <div class="flex justify-center gap-6 mb-4 text-sm text-gray-600">
                <a href="index.html" class="hover:text-blue-600 transition">首頁</a>
                <a href="about.html" class="${isAbout ? 'text-blue-600 font-medium' : 'hover:text-blue-600 transition'}">關於我們 & 隱私權政策</a>
            </div>

            <p class="text-gray-500 text-sm">
                &copy; ${CURRENT_YEAR} PurePDF. Created by <a href="https://minghanbai.github.io/" target="_blank" class="text-blue-600 hover:text-blue-800 hover:underline font-medium transition">minghanbai</a>.
            </p>
        </div>
    </footer>
    `;

    // 插入 Header 到 body 最前面
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // 插入 Footer 到 body 最後面
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
