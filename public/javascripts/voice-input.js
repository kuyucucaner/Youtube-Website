// Arama kutusunu ve mikrofon butonunu seçin
const searchInput = document.getElementById('search-input');
const voiceSearchButton = document.getElementById('voice-search-button');

// Mikrofonun durumunu takip etmek için bir değişken
let isListening = false;
let recognition = null;

// Mikrofon butonuna tıklama dinleyicisi ekleme
voiceSearchButton.addEventListener('click', function() {
    if (!isListening) { // Mikrofon kapalıysa
        // Konuşma tanıma işlevini başlatma
        recognition = new webkitSpeechRecognition() || new SpeechRecognition();
        recognition.lang = 'tr-TR'; // Tanınacak dil ayarı

        // Tanınan metni arama kutusuna ekleme
        recognition.onresult = function(event) {
            searchInput.value = event.results[0][0].transcript;
        }

        // Hata durumunu ele alma
        recognition.onerror = function(event) {
            console.error('Konuşma tanıma hatası:', event.error);
            // Hata durumuna uygun bir mesajı kullanıcıya gösterebilirsiniz
        };

        // Tanıma işlemini başlat
        recognition.start();
        isListening = true;
        voiceSearchButton.classList.add('listening'); // İşaretçiyi değiştirme
    } else { // Mikrofon açıksa
        // Mikrofonu kapat
        recognition.stop();
        isListening = false;
        voiceSearchButton.classList.remove('listening'); // İşaretçiyi eski haline getirme
    }
});
