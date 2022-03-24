const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function  appendCat(name){
    appendCat = [...cats, name];
    return appendCat
}
function prependCat(name){
    prependCat = [name, ...cats];
    return prependCat
}
function removeLastCat(){
    removeLastCat = cats.slice(0, cats.length - 1);
    return removeLastCat
}
function removeFirstCat(){
    removeFirstCat = cats.slice(1);
    return removeFirstCat
}