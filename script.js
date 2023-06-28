// complete the given function

function palindrome(str){
	let str1 = "";
	for(let i=0;i<str.length;i++){
		if(str.charAt(i)!=" "){
			str1 = str1+str.charAt(i);
		}
	}
	let end = str1.length-1;
	let start =0;
	while(start<end){
		if(str1.charAt(start)!=str1.charAt(end)){
			return false;
		}
		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
