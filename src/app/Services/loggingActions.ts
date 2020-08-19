export default {
    add: {
        type: 'add',
        message: 'You\'ve added'
    },
    edit: {
        type: 'edit',
        message: 'You\'ve edited'
    },
    clone: {
        type: 'clone',
        message: 'You\'ve cloned'
    },
    delete: {
        type: 'delete',
        message: 'You\'ve deleted'
    },
    error: {
        type: 'error'
    },
    auth: {
        type: {
            emailExists: {
                type: 'EMAIL_EXISTS',
                message: 'User with such email is already registred!'
            },
            invalidPassword: {
                type: 'INVALID_PASSWORD',
                message: 'The password is wrong!'
            },
            weakPassword: {
                type: 'WEAK_PASSWORD : Password should be at least 6 characters',
                message: 'Password should be at least 6 characters!'
            },
            emailNotFound: {
                type: 'EMAIL_NOT_FOUND',
                message: 'User does not exist!'
            },
            invalidEmail: {
                type: 'INVALID_EMAIL',
                message: 'Email is invalid!'
            }
        }
    }
}