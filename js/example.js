// ADD NEW ITEM TO END OF LIST

let kale  = document.createTextNode('Kale');
let creame = document.createTextNode("Cream");

let liEnd = document.createElement('li');
let ul = document.querySelector('ul');
let children = ul.childElementCount;

liEnd.append(creame);
ul.append(liEnd);

// ADD NEW ITEM START OF LIST
let liStart = document.createElement('li');

liStart.append(kale);
ul.insertBefore(liStart, ul.children[0]);


// ADD A CLASS OF COOL TO ALL LIST ITEMS

for(let i = 0; i <= children + 1; i++){
    ul.children[i].classList.add("cool")
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
children += 2;
document.querySelector('h2').innerHTML = "Buy Grocieries " + children;