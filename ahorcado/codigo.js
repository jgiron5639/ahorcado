var words = ['javascript', 'html', 'css', 'developer', 'programming'];
    var word = words[Math.floor(Math.random() * words.length)];
    var guessedWord = Array(word.length).fill('_');
    var attemptsLeft = 6;

    function displayWord() {
      document.getElementById('word').textContent = guessedWord.join(' ');
    }

    function displayAttempts() {
      document.getElementById('attemptsLeft').textContent = attemptsLeft;
    }

    function guessLetter(letter) {
      if (attemptsLeft > 0 && guessedWord.indexOf('_') !== -1) {
        if (word.includes(letter)) {
          for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
              guessedWord[i] = letter;
            }
          }
        } else {
          attemptsLeft--;
        }

        displayWord();
        displayAttempts();

        if (guessedWord.indexOf('_') === -1) {
          alert('¡Felicidades! Has adivinado la palabra.');
        } else if (attemptsLeft === 0) {
          alert('¡Oh no! Te quedaste sin intentos. La palabra era: ' + word);
        }
      } else {
        alert('El juego ha terminado. Por favor, reinicia para jugar de nuevo.');
      }
    }

    displayWord();
    displayAttempts();