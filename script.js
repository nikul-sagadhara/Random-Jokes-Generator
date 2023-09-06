const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('btn');

const generateJoke = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const response = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await response.json();
        joke.innerHTML = `"😂 ${data.joke} 😂"`;
    }catch(error){
        console.log(error);
    }
}

jokeBtn.addEventListener('mousedown', () => {
    jokeBtn.style.scale = ".9";
})
jokeBtn.addEventListener('mouseup', () => {
    jokeBtn.style.scale = "1";
})

// jokeBtn.onmousedown = jokeBtn.style.scale = ".5"


jokeBtn.addEventListener('click', generateJoke);
generateJoke();