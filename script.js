function firstChar(text) {
  // your code here
	String st = text.trim();
	return st.length > 0 ? st[0] : '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
