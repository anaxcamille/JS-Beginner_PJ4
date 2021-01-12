let body=document.body;
let submit= document.querySelector('button');
let deliver = document.getElementById('demo');
submit.addEventListener('click',pass);
let count=0;
function pass(){
	let message= document.getElementById('message').value;
	if(count===0){
		deliver.textContent=message;
		count+=1;
		clear();
	}else if(count===1){
		deliver.textContent=message;
		var p = document.createElement('p');
		body.append(p);
		p.id ="deliver";
		p.textContent="Last Message Deliver";
		count+=1;
		clear();
	}else if(count>1){
		deliver.textContent=message;
		clear();
	}
}
function clear(){
	let message= document.getElementById('message').value="";
}