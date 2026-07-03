function validatePost(formData){
    const errors = {}

    if (!formData.title || formData.title.trim() === ''){
        errors.title = 'Title is required'
    }else if (formData.title.trim().length < 3){
        errors.title = 'Title must be atleast 3 characters long'
    }else if (formData.title.trim().length > 100){
        errors.title = 'Title should be less than 100 characters'
    }

    if (!formData.author || formData.author.trim() === ''){
        errors.author = 'Author name is required'
    }else if (formData.author.trim().length < 2){
        errors.author = 'Author name must be atleast 2 characters long'
    }

    if (!formData.content || formData.content.trim() === ''){
        errors.content = 'Content should not be vacant'
    }else if (formData.content.trim().length < 50){
        errors.content = 'Content must be atleat 50 characters long'
    }

    if (formData.tags) {
        const tagList = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
        const error_chk = tagList.filter(tag => tag.length < 2)
        if (error_chk.length > 0){
            errors.tags = 'All tags must be atleast 2 characters long'
        }
    }

    return errors
}

export default validatePost