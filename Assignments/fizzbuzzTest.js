document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('fizzBtn');
  const output = document.getElementById('output');
  if (!button || !output) return;

  button.addEventListener('click', function () {
    const lines = [];
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        lines.push('FizzBuzz');
      } else if (i % 3 === 0) {
        lines.push('Fizz');
      } else if (i % 5 === 0) {
        lines.push('Buzz');
      } else {
        lines.push(String(i));
      }
    }
    output.innerHTML = lines.join('<br>');
  });
});

