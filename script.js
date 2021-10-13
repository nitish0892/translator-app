var input=document.querySelector('#input');

var output=document.querySelector('#output');

var btn=document.querySelector('#btn');

var url="https://api.funtranslations.com/translate/minion.json";

function createUrl(text){

	return url+"?"+"text="+text;
};


function translate(){

	var inputText=input.value;

	fetch(createUrl(inputText))
	.then( response => response.json())
	.then( data => {
		output.value=data.contents.translated;
	})
	.catch(() => alert("some error occured"))

};

btn.addEventListener('click', translate);