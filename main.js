// /**************************************************************************************** */
// const firstPageH1 = document.querySelector('.first-page header h1');
// const firstPageH3 = document.querySelector('.first-page header h3');
// const pargraphs = [firstPageH1, firstPageH3];

// let texts = ["Web Development (Front-end)", "The Art of the web"];
// let i = 0;

// function delete1 (p) {

//     if (p === -1)
//     {
//         write(0);
//         return;
//     }
//     else {
//         setTimeout(() => {
//             pargraphs[p].innerHTML = '';
//             pargraphs[1].classList.remove('blink');
//             pargraphs[0].classList.add('blink');
//             i = 0;
//             delete1(p-1);
//         }, 2000);   
//     }
// }

// function write (p) {
//     pargraphs[p].classList.add('blink');
//     let id = setInterval(() => {
//         pargraphs[p].innerHTML += texts[p][i];
//         i++;
//         if (i === texts[p].length)
//         {
//             if (p === 1)
//             {
//                 delete1(p);
//                 clearInterval(id);
//             }
//             else {
//                 i = 0;
//                 pargraphs[p].classList.toggle('blink');
//                 clearInterval(id);
//                 write(1);
//             }
//         }
//     }, 200);

// }
// write(0);

// /***************************************************************************** */
// class Tyeping {
//     constructor(id, text, flag)
//     {
//         this.el = document.querySelector(id);
//         this.text = text;
//         this.index = 0;
//         this.flag = flag;
//     }
    
//     delete2() {
//         setTimeout(() => {
//             this.el.innerHTML = '';
//             this.index = 0;
//             this.write1();
//         }, 6000); 
//     }
    
    
//     write1() {
//         let id = setInterval(() => {
//             this.el.innerHTML += this.text[this.index];
//             this.index++;
//             if (this.index === this.text.length)
//             {
//                 if(this.flag)
//                 {
//                     this.delete2();
//                 }
//                 clearInterval(id);
//             }
//         }, 200);
//     }
// };


// const elements = ['#header-1', '.third-page h2'];
// const headerText = ["What does programming mean?", "Benifit from programming"];
// const headerFlags = [true, true];
const viewBox = document.querySelector('.viewBox');
const boxes = Array.from(document.querySelectorAll('.box')); // to get the number of boxes and add it to if (move < boxes)
// for animation purpose

let move = 0;
// let counter = -1;


function transf() {
    viewBox.style.transition = 'all .7s ease-in-out';
    viewBox.style.transform = `translateX(${move}vw)`;
}



document.addEventListener('keyup', (e) => {
    if(e.code === 'Space' && !(move < ((boxes.length - 2) * -100)))
    { 
        move += -100;
        transf();

        // if (counter < elements.length - 1)
        // {
        //     setTimeout(() => {
        //         counter++;
        //         let writeH = new Tyeping(elements[counter], headerText[counter], headerFlags[counter]);
        //         writeH.write1();
        //     },1000)
        // }    
        console.log(move);

    } 
    else if (e.code === 'KeyA') 
    {
        move = 0;
        transf();
    }
    else if (e.code === 'KeyZ') {
        move = (boxes.length - 1) * -100;
        transf();
    }
    else if (e.code === 'KeyB' && !(move >= 0)){
        move += 100;
        transf();
    }
})

