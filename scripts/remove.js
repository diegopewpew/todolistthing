document.querySelectorAll('.dropdown-item').forEach( el => el.onclick = function(e) {
  let removed = document.getElementById('removed');
  e.target.setAttribute("style", "display: none;");

  if(removed.classList.contains('alert-success') || !removed.classList.contains('alert-danger')) {
    removed.classList.remove('alert-success');
    removed.classList.add('alert-danger');
  }

  removed.innerHTML = e.target.innerHTML;
});

document.getElementById('reset').onclick = function() {
  let removed = document.getElementById('removed');

  document.querySelectorAll('.dropdown-item').forEach( el => el.removeAttribute('style'));

  if(removed.classList.contains('alert-danger') || !removed.classList.contains('alert-success')) {
    removed.classList.remove('alert-danger');
    removed.classList.add('alert-success');
  }

  removed.innerHTML = 'All dropdown items returned!';
};