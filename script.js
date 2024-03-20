let inputRadius = document.querySelector("#radius")
let outputVolume = document.querySelector("#volume")

function volume_sphere() {
    let r = +inputRadius.value
	if(r >= 0 && typeof(r) === "number"){
		let ans = ((4/3)*(Math.PI)*(r**3)).toFixed(4)
		outputVolume.value = ans
	}
	else {
        outputVolume.value = "NaN";
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
