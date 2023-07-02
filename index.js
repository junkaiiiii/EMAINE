const color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const namelist = ['我', '爱','陈','仪','欣','♥']
var count = 0;
const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn = document.getElementById('btn');
const body = document.getElementById('body');
const kl = document.getElementById('kl');

const randomColor = () =>{
    var number = "#";
    for(let i = 0; i<6; i++){
        const j = Math.floor(Math.random() * hex.length);
        number += hex[j];
        body.style.backgroundColor = number;
    };
    console.log(number)
}



const selectColor = () => {
    const i = Math.floor(Math.random() * color.length);
    const selectColor = color[i];
    body.style.backgroundColor = selectColor;
};

const clickCounter = () =>{

    const selectName = () =>{
        const selectName = namelist[count];
        kl.textContent = selectName;
    }

    selectName();
    console.log(count);
    count++;
    if (count>5){
        count =0;
    }

}

btn.addEventListener('click',clickCounter);
btn.addEventListener('click', randomColor);

