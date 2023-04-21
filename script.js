function highlight() {
    //Write your code here
	let bold = document.getElementsByTagName("strong");
	for(let i=0;i<bold.length;i++){
		bold[i].style.color = "green";
	}
}
function return_normal() {
    //Write your code here
	let bold = document.getElementsByTagName("strong");
	for(let i=0;i<bold.length;i++){
		bold[i].style.color = "black";
	}
}
