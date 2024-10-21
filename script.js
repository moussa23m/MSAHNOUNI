document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault(); // لمنع إعادة تحميل الصفحة

  // التحقق من تحميل جميع الملفات المطلوبة
  const file1 = document.getElementById('file1').files[0];
  const file2 = document.getElementById('file2').files[0];
  const file3 = document.getElementById('file3').files[0];

  if (!file1 || !file2 || !file3) {
    alert("⚠️ الرجاء تحميل جميع الملفات المطلوبة.");
    return;
  }

  alert("✅ تم إرسال الملفات بنجاح!");
});
