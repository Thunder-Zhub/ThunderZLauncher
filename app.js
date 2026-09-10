// ThunderZ Launcher — landing page interactions

document.addEventListener('DOMContentLoaded', () => {
  const downloadLinks = document.querySelectorAll('[data-download-placeholder]');

  downloadLinks.forEach((link) => {
    const originalText = link.textContent.trim();

    link.addEventListener('click', (event) => {
      // เช็กว่าถ้าลิงก์ยังเป็น # หรือไม่มีลิงก์ ค่อยบล็อกไว้
      const href = link.getAttribute('href');
      
      if (!href || href === '#') {
        event.preventDefault();
        link.textContent = 'Download link not ready yet';
        setTimeout(() => {
          link.textContent = originalText;
        }, 1800);
      }
      // ถ้ามีลิงก์จริงแล้ว (เช่น ลิงก์ GitHub) มันจะปล่อยให้กดดาวน์โหลดได้ปกติ
    });
  });
});