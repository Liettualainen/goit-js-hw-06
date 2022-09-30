

const categories =  document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i+=1) {
    const category = categories[i];
    console.log(`\nCategory: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`); 

    // console.log(`\nCategory: ${category.firstElementChild.textContent}`);
    // console.log(`Elements: ${category.lastElementChild.children.length}`); 

}


