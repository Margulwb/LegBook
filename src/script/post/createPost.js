export default function createLayout(input, container) {
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
        empty(){
            textAreaValue.placeholder="Writre sometching"
        }
    }
    input.addEventListener('click', createPost.open)

    let exit = document.querySelector('#exitImage')
    exit.addEventListener('click', createPost.close)

    let post = {
        type(){
            let post = document.createElement('div')
            post.classList.add('post')

            let postContent = document.createElement('div')
            postContent.classList.add('post-content')
            postContent.textContent = textAreaValue.value

            viewPost.appendChild(post)
            post.appendChild(postContent)

            this.option(post) 
        },

        option(post){
            let option = document.createElement('div')
            option.classList.add('option-post')
            option.innerHTML='<img src="images/moreOption.png" alt="option">'
            post.appendChild(option)
    
            option.addEventListener('click',()=>{
                this.deletePost(option , post)
                this.createEditPostBtn(option) 
            })
        },

        deletePost(option , post){
            if(document.querySelector('.exit-button')){
                option.removeChild(document.querySelector('.exit-button'))
                option.style.backgroundColor="#fff"
            }else{
            option.style.backgroundColor="#dbdbdb"

            let deleteButton = document.createElement("div")
            deleteButton.classList.add('exit-button')
            deleteButton.innerHTML='<img src="images/exit.png" alt="exit">Delete Post'
            option.appendChild(deleteButton)

            deleteButton.addEventListener('click',()=>{
                viewPost.removeChild(post)
            }) 
            }
        },

        createEditPostBtn(option){
            if(document.querySelector('.edit-button')){
                option.removeChild(document.querySelector('.edit-button'))
                option.style.backgroundColor="#fff"
            }else{
            option.style.backgroundColor="#dbdbdb"

            let buttonEdit = document.createElement("div")
            buttonEdit.classList.add('edit-button')
            buttonEdit.innerHTML='<img src="images/edit.png" alt="edit">Edit Post'
            option.appendChild(buttonEdit)
            
            buttonEdit.addEventListener('click', this.replaceButton)
            }
        },

        replaceButton(){ 
            createPost.open()
            
            let editButton = document.createElement('button')
            editButton.classList.add('button-edit')
            editButton.textContent='Edit'
            let fatherButtonPost = document.querySelector('.layout-post-button')

            fatherButtonPost.replaceChild(editButton,buttonPost)

            let allPost = [...document.querySelectorAll('.post')]
            allPost.forEach(el=>{
                el.addEventListener('click',()=>{
                    let content = el.querySelector('.post-content')
                    textAreaValue.value = content.innerHTML

                    editButton.addEventListener('click',()=>{
                        content.textContent = textAreaValue.value
                        
                        createPost.close()
                        fatherButtonPost.replaceChild(buttonPost , editButton)
                    })

                    let exit = document.querySelector('#exitImage')
                    exit.addEventListener('click',function(){
                        fatherButtonPost.replaceChild(buttonPost , editButton)
                    })
                })
            })
        }
    }

    let buttonPost = document.querySelector('.button-post')
    buttonPost.addEventListener('click', () => {
        if(textAreaValue.value != ''){
            post.type()
            createPost.close()
        }else{
            createPost.empty()
        }
    }) 
}