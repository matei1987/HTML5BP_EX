function LinkFactory(){}
LinkFactory.prototype.makeElement = function  (array, element) {
    if (element === "a"){
        createLinks(array);
    }
};
function createLinks(array){

    var linkList = [];
    for (var i = 0; i<array.length; i++){
        var link = document.createElement('a');
        link.href = array[i];
        link.textContent = i+1;
        linkList.push(link);
    }
    return linkList;
}


var myList = ['http://www.google.com','http://www.yahoo.com','http://www.reddit.com'];



console.log(createLinks(myList));