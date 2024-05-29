fetch('/auth/google/callback', {
    method: 'GET',
    credentials: 'include' // Oturum bilgilerini eklemek için gerekli
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Google oturum açma işlemi başarısız oldu.');
    }
    return response.json(); // Eğer JSON formatında bir yanıt bekleniyorsa
  })
  .then(data => {
    console.log("Google verileri:", data);

})
  .catch(error => {
    console.error('Hata:', error);
  });
  