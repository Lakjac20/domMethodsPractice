const body = document.querySelector ('body')

let buttonElement = document.createElement('button')
body.append(buttonElement)
buttonElement.type ='button'
buttonElement.append('Remove')

let mainElement = document.createElement('main')
body.append(mainElement)


// append an image tag with class 'image'
let imgElement = document.createElement('img')
mainElement.append(imgElement)
imgElement.className = 'image'
imgElement.src = 'https://media1.fdncms.com/orlando/imager/u/blog/27481116/adobestock_353102554-1000.png?cb=1592510380'
imgElement.alt = 'Silhouette of a black woman on a Yellow green red vertical stripe background with a Juneteenth head band'

//append anchor tag with class ='link'
let aElement = document.createElement('a')
mainElement.append(aElement)
aElement.className = 'link'
aElement.href = 'https://www.history.com/news/what-is-juneteenth/'
aElement.target = '_blank'
aElement.append('History of Juneteenth')



let scriptElement = document.createElement('script')
body.append(scriptElement)


// add 'click' event listener to remove <main>

buttonElement.addEventListener('click', function (){
    mainElement.remove()
})