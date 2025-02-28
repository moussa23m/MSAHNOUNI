﻿document.getElementById('uploadForm').addEventListener('submit', function(e) {
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
  // إعداد Firebase
const firebaseConfig = {
    apiKey: "msahnouni-c3fcf",
    authDomain: "msahnouni.firebaseapp.com",
    databaseURL: "https://msahnouni.firebaseio.com",
    projectId: "msahnouni-c3fcf",
    storageBucket: "msahnouni.appspot.com",
    messagingSenderId: "757108100880",
    appId: "YOUR_APP_ID"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // جمع البيانات من النموذج
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;

    // إعداد البيانات للإرسال
    const submissionData = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate
    };

    // إرسال البيانات إلى Firebase
    database.ref('submissions/').push(submissionData)
    .then(() => {
        console.log('تم استلام البيانات بنجاح!');
        // يمكنك إظهار رسالة للمستخدم هنا
    })
    .catch((error) => {
        console.error('حدث خطأ:', error);
    });
});

});
