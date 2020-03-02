list = ["cat","dog","cat","monkey","cattle"]

value = "cat"

flag = false;

for (i=0; i < list.length; i++) {
	if (value === list[i]){
		console.log("found");
		break;
	}
}






list = ["cat","dog","cat","monkey","cattle"]

value = "cat"

flag = false;

for (i=0; i < list.length; i++) {
	if (value === list[i]){
		flag = true;
		break;
	}
}
	
if (flag === true) {
	console.log("YES")
    }
else {
	console.log("NO")
}
