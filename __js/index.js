const inviteButtonDesktop = document.getElementById('inviteButtonDesktop')
const inviteButtonMobile = document.getElementById('inviteButtonMobile')

const supportButtonDesktop = document.getElementById('supportButtonDesktop')
const supportButtonMobile = document.getElementById('supportButtonMobile')

inviteButtonDesktop.addEventListener('click', function() {
    window.location.href = '/invite'
})

inviteButtonMobile.addEventListener('click', function() {
    window.location.href = '/invite'
})

supportButtonDesktop.addEventListener('click', function() {
    window.location.href = '/support'
})

supportButtonMobile.addEventListener('click', function() {
    window.location.href = '/support'
})