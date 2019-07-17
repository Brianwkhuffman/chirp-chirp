function chirp(n) {
  let x = "chirp ";
  if (n === 1) {
    return x;
  } else {
    return (x += chirp(--n));
  }
}
$(document).ready(function() {
  $("#result").html(chirp(3));
});
