const inviteButton = document.getElementById('invite-button')
const termsCheckbox = document.getElementById('terms-checkbox')

const queryParams = getQueryParams(window.location.href)

if (Object.keys(queryParams).includes('skip')) window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1122853658418237520&permissions=138244648128&scope=bot%20applications.commands'

termsCheckbox.addEventListener('change', () => {
    inviteButton.disabled = !termsCheckbox.checked
})

inviteButton.addEventListener('click', function() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1122853658418237520&permissions=138244648128&scope=bot%20applications.commands'
})