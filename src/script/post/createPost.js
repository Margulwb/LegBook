function createLayout(input, container) {
    let layout = document.querySelector('.layout-post')
    let textAreaValue = document.querySelector('.post-value')
    let viewPost = document.querySelector('.view-post')

    let createPost = {
        close(){
            layout.classList = "is-close"
            container.style.opacity = "100%"
            textAreaValue.value = ''
        },

        open(){
            layout.classList = "is-open layout-post"
            container.style.opacity = "50%"
        },

        type(){
            event.preventDefault()
            let post = document.createElement('div')
            post.textContent = textAreaValue.value
            post.classList = 'post'
            viewPost.appendChild(post)
        },

        empty(){
            textAreaValue.placeholder="Writre sometching"
        }
    }
    input.addEventListener('click', createPost.open)

    let exit = document.querySelector('.layout-post-exit')
    exit.addEventListener('click', createPost.close)

    let buttonExit = document.querySelector('.button-exit')
    buttonExit.addEventListener('click', () => {
        if(textAreaValue.value != ''){
            createPost.type()
            createPost.close()
        }else{
            createPost.empty()
        }
        
    })
}
