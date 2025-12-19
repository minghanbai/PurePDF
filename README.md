### PurePDF - 純前端 PDF 工具箱
PurePDF 是一個開源、免費且注重隱私的 PDF 線上工具集合。
本專案的核心理念是 「檔案不離手」。所有 PDF 的讀取、編輯、轉換與重組運算，皆完全在您的瀏覽器端（Client-side）透過 JavaScript 完成。您的機密文件永遠不會被上傳至任何雲端伺服器，確保 100% 的資訊安全。
# ✨ 主要特色

* 🔒 絕對安全：無後端伺服器，檔案處理完全在本地裝置進行。
* ⚡ 快速輕量：無需安裝任何軟體或外掛，開啟網頁即用。
* 📱 響應式設計：針對手機與電腦介面最佳化，隨時隨地皆可處理文件。
* 🎨 現代化介面：使用 Tailwind CSS 打造的直覺操作體驗。

# 🛠️ 包含工具

1. PDF 合併重組 (PDF Merge & Reorder)
* 多檔支援：可一次載入多個 PDF 檔案進行串接。
* 視覺化排序：透過拖曳（Drag & Drop）直覺調整頁面順序。
* 頁面篩選：自由勾選或取消特定頁面，僅輸出需要的內容。
* 無損輸出：保留原始 PDF 的文字層、連結與向量內容，不進行破壞性壓縮。

2. PDF 轉 JPG (PDF to JPG Converter)
* 高解析度轉換：支援 72 DPI (螢幕) 至 300 DPI (列印) 的輸出設定。
* 彈性設定：可自訂輸出尺寸（像素或紙張大小）與 JPEG 品質。
* 批次處理：自動將轉換後的多張圖片打包成 ZIP 檔下載。

# 🚀 如何使用

線上使用 (GitHub Pages)
您可以直接訪問本專案的 GitHub Pages 頁面（請在此處填入您的 GitHub Pages 網址）開始使用。
本地端執行
1. 下載或 Clone 本儲存庫：
```
git clone https://github.com/minghanbai/PurePDF.git
```
2. 直接使用瀏覽器開啟 index.html 即可。無需架設本地伺服器（Node.js/Python 等皆不需要）。

# 💻 技術棧
本專案完全基於標準 Web 技術構建：
* 核心語言：HTML5, JavaScript (ES6+)
* 樣式框架：Tailwind CSS (透過 CDN 載入)
* UI 庫：React (用於轉圖工具部分, 透過 CDN 載入)
* 關鍵函式庫：
** PDF.js - 用於 PDF 渲染與縮圖生成
** pdf-lib - 用於 PDF 結構修改與合併
** SortableJS - 處理拖曳排序互動
** JSZip - 用於圖片打包壓縮

# 📄 授權
本專案採用 MIT 授權條款。歡迎自由使用、修改與分發。

Designed for secure local processing. No data leaves your browser.
