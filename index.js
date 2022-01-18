function newImage(source, leftPixels, bottomPixels){
    let element = document.createElement('img')
element.src = source;
element.style.position = 'fixed';
element.style.left = leftPixels;
element.style.bottom = bottomPixels;
document.body.append(element);
return element
}

function newItem(source, leftPixels, bottomPixels) {
    let item = newImage(source, leftPixels, bottomPixels)

    item.addEventListener('dblclick', function(){
        item.remove()
    })
}
//New Images
newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

//New Items
newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');

