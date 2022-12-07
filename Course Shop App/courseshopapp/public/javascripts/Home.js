const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function myFunction1() {

    document.getElementById("myDIV1").style.display = "flex" ;

    document.getElementById("myDIV2").style.display = "none";

    document.getElementById("myDIV3").style.display = "none";

    document.getElementById("myDIV4").style.display = "none";

}

function myFunction2() {

  document.getElementById("myDIV1").style.display = "none";

  document.getElementById("myDIV2").style.display = "flex";

  document.getElementById("myDIV3").style.display = "none";

  document.getElementById("myDIV4").style.display = "none";

}

function myFunction3() {

  document.getElementById("myDIV1").style.display = "none";

  document.getElementById("myDIV2").style.display = "none";

  document.getElementById("myDIV3").style.display = "flex";

  document.getElementById("myDIV4").style.display = "none";

}

function myFunction4() {

  document.getElementById("myDIV1").style.display = "none" ;

  document.getElementById("myDIV2").style.display = "none";

  document.getElementById("myDIV3").style.display = "none";

  document.getElementById("myDIV4").style.display = "flex";

}