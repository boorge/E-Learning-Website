<!--javascript part-->

<script type="text/javascript" src="js/JQuery.js">
	<script type="text/javascript">
	$(document).ready(function(){
		$('.toggle').click(function(){
			$('.toggle').toggleClass('active')
			$('nav').toggleClass('active')
		})
	})

<script type="text/javascript">
		window.addEventListner('scroll',function(){
			const header = document.querySelector('header');
			header.classList.toggle("sticky",window.scrollY > 0);
		});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

</script>