var domReady = function(callback) {
  document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

domReady(() => {

  let lives = 3;
  let number = Math.floor(Math.random() * 10) + 1;
  let input = document.getElementById('guess');
  let reset = false;
  let submit = document.getElementById('submit');

  document.getElementById('lives').innerHTML = lives;

  input.oninput = function(){
    if(input.value > 10) {
      input.value = 10;
    } else if(input.value < 0) {
      input.value = 1;
    }
  }

  submit.onclick = function(){
    let reply = document.getElementById('dialogue');

    if(reset) {
      reply.classList.remove('text-danger');
      reply.classList.remove('text-success');

      reply.innerHTML = 'Can you guess what it is?';

      lives = 3;
      number = Math.floor(Math.random() * 10) + 1;
      reset = false;

      input.value = '';

      document.getElementById('lives').innerHTML = lives;
      submit.classList.remove('btn-danger');
      submit.classList.add('btn-success');
      submit.innerHTML = 'Guess!';

    } else {
      let guess = input.value;

      if(guess == number) {
        if(!reply.classList.contains('text-success')) {
          reply.classList.remove('text-danger');
          reply.classList.add('text-success');
        }
        reply.innerHTML = `Congratulations! You got it!`;
        submit.classList.remove('btn-success');
        submit.classList.add('btn-danger');
        submit.innerHTML = 'Reset';
        reset = true;
      } else {
        lives--;
        if(!reply.classList.contains('text-danger')) {
          reply.classList.remove('text-success');
          reply.classList.add('text-danger');
        }
        
        if(lives > 0) {
          reply.innerHTML = `Uh-oh! That's not it. You have ${lives} guesses left.`;
        } else {
          reply.innerHTML = `You've run out of guesses! The number was <u>${number}</u>`;
          submit.classList.remove('btn-success');
          submit.classList.add('btn-danger');
          submit.innerHTML = 'Reset';
          reset = true;
        }

        document.getElementById('lives').innerHTML = lives;
      }
    }
    
  }

});