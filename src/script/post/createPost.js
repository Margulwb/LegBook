export function CreatePost(layoutCreate) {
    let textAreaValue = document.querySelector('.post-value')
    let viewPost = document.querySelector('.view-post')

    let postCreate = {
        type() {
            let post = document.createElement('div')
            post.classList.add('post')

            let postContent = document.createElement('div')
            postContent.classList.add('post-content')
            postContent.textContent = textAreaValue.value

            viewPost.prepend(post)
            post.appendChild(postContent)

            this.option(post)
        },

        option(post) {
            let option = document.createElement('div')
            option.classList.add('option-post')
            option.innerHTML = '<img src="images/moreOption.png" class="option" alt="option">'
            post.appendChild(option)

            option.addEventListener("click", () => {
                option.forEach(el => {
                    if (el.querySelector(".exit-button")) {
                        this.removeOptions(el, post);
                    } else {
                        this.deletePost(el, post);
                        this.createEditPostBtn(el);
                    }
                })

            });
        },

        removeOptions(option) {
            let deleteBtn = document.querySelector('.exit-button')
            option.removeChild(deleteBtn)

            let editBtn = document.querySelector('.edit-button')
            option.removeChild(editBtn)

            option.style.backgroundColor = "#fff"


        },

        deletePost(option, post) {
            if (option.querySelector('.exit-button')) {
                let deleteBtn = option.querySelector('.exit-button')
                option.removeChild(deleteBtn)
                option.style.backgroundColor = "#fff"
            } else {
                option.style.backgroundColor = "#dbdbdb"

                let deleteButton = document.createElement("div")
                deleteButton.classList.add('exit-button')
                deleteButton.innerHTML = '<img src="images/exit.png" alt="exit">Delete Post'
                option.appendChild(deleteButton)

                deleteButton.addEventListener('click', () => {
                    viewPost.removeChild(post)
                })
            }

        },

        createEditPostBtn(option) {
            if (option.querySelector('.edit-button')) {
                let editBtn = option.querySelector('.edit-button')
                option.removeChild(editBtn)
                option.style.backgroundColor = "#fff"
            } else {
                option.style.backgroundColor = "#dbdbdb"

                let buttonEdit = document.createElement("div")
                buttonEdit.classList.add('edit-button')
                buttonEdit.innerHTML = '<img src="images/edit.png" alt="edit">Edit Post'
                option.appendChild(buttonEdit)

                buttonEdit.addEventListener('click', this.editPost)
            }

        },

        editPost() {
            layoutCreate.open()

            let editButton = document.createElement('button')
            editButton.classList.add('button-edit')
            editButton.textContent = 'Edit'

            let fatherButtonPost = document.querySelector('.layout-post-button')
            fatherButtonPost.replaceChild(editButton, buttonPost)

            let allPost = document.querySelectorAll('.post')
            allPost.forEach(el => {
                el.addEventListener('click', function() {
                    let content = el.querySelector('.post-content')
                    textAreaValue.value = content.innerHTML

                    editButton.addEventListener('click', () => {
                        content.textContent = textAreaValue.value
                        layoutCreate.close()
                        fatherButtonPost.replaceChild(buttonPost, editButton)
                    })

                    let exit = document.querySelector('#exitImage')
                    exit.addEventListener('click', () => {
                        fatherButtonPost.replaceChild(buttonPost, editButton)
                    })
                })
            })
        }
    }

    let buttonPost = document.querySelector('.button-post')
    buttonPost.addEventListener('click', () => {
        if (textAreaValue.value != '') {
            postCreate.type()
            layoutCreate.close()
        } else {
            layoutCreate.empty()
        }
    })
}