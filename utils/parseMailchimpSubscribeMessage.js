export default function parseMailchimpSubscribeMessage(message) {
    const alreadySubscribed = 'is already subscribed'
    const invalidEmail = 'is an invalid email address'

    if (message) {
        if (message.includes(alreadySubscribed)) {
            return 'alreadySubscribed'
        }
        if (message.includes(invalidEmail)) {
            return 'invalidEmail'
        }
        
        return 'otherError'
    }
}