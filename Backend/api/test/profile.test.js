const profile = require('../profile')
const webServicesUrl = {
    addProfile: "https://5vktvhtwf1.execute-api.us-east-1.amazonaws.com/dev/profile",
    updateProfile: "https://5vktvhtwf1.execute-api.us-east-1.amazonaws.com/dev/profile",
    listProfile: "https://5vktvhtwf1.execute-api.us-east-1.amazonaws.com/dev/profile",
}

test('statusCode is 200', () => {
    const listProfile = profile.list({}, '', () => { })
    expect(listProfile.statuscode).toEqual(200)
})