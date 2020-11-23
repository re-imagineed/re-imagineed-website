export default function parseMailchimpSubscribeMessage(message) {
    const alreadySubscribed = 'is already subscribed'
    const tooManySignUps = 'has too many recent signup requests'
    const invalidEmail = 'is an invalid email address'

    if (message) {
        if (message.includes(alreadySubscribed) ||
            message.includes(tooManySignUps)) {
            return 'alreadySubscribed'
        }
        if (message.includes(invalidEmail)) {
            return 'invalidEmail'
        }
        
        return 'otherError'
    }
}