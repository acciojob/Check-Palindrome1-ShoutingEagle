// complete the given function

function palindrome(str){
	let str1 = str.replace(" ","");
	let end = str1.length-1;
	let start =0;
	while(start<end){
		if(str1[start]!=str1[end]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
