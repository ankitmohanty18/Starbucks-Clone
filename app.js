// Function to switch between star rewards
const array_stars = [25,50,150,200,400]

const clear_all=()=>{
    for(let i= 0;i<array_stars.length;i++){
        let star_value = array_stars[i];
        document.getElementById(`s-2-${star_value}`).classList.add('hide');
    }
}

const myfunc =() => {
    for(let i= 0;i<array_stars.length;i++){
        let star_value = array_stars[i];
        
        const shows_num=()=>{
            clear_all();
            document.getElementById(`s-2-${star_value}`).classList.remove('hide');
            document.getElementById(`s-2-${star_value}`).classList.add('animate');
          }
        const s_num = document.getElementById(`s${star_value}`);
        s_num.addEventListener("click", shows_num);
    }
}
myfunc();
