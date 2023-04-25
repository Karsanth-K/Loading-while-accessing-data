window.addEventListener('blur',()=>{
    document.title = "Please come back";
})
let title = "Loading..."
window.addEventListener('focus',()=>{
    document.title = title;
})
async function getbgimg() {
   const response = await fetch('https://picsum.photos/3000/2000')
   const url = await fetch(response.url)
   document.body.style.backgroundImage = `url(${url.url})`
   document.body.style.backgroundSize = "cover"
}
async function getimg(){
    const response = await fetch('https://picsum.photos/3000/2000?greyscale')
    const url = await fetch(response.url)
    document.getElementById('img').src = url.url
    document.getElementById('loadgif').remove()
    document.title = title ="Loaded"
}
getbgimg().finally(()=>{
    setTimeout(() => {
        document.querySelector('.loaded').innerHTML='<h1>Welcome</h1><div class="load_image"><img id="loadgif" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"><img id="img" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/02b374101705095.5f24d5db1096f.gif"></div>'
    }, 2000);
    setTimeout(() => {
        getimg()
    }, 1000)
    }
)


// getimg()