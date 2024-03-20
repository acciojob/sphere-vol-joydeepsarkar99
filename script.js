function volume_sphere() {
	let inputRadius = document.querySelector("#radius")
	let outputVolume = document.querySelector("#volume")
	let btn = document.querySelector("#submit")

	btn.addEventListener("click",calculateVol)

	function calculateVol(e){
		e.preventDefault()
	    let r = +inputRadius.value
		if(r >= 0 && typeof(r) === "number"){
			let ans = ((4/3)*(Math.PI)*(r**3)).toFixed(4)
			outputVolume.value = ans
		}
		else {
	        outputVolume.value = "NaN";
	    }
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
