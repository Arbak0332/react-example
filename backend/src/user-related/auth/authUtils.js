const axios = require("axios")

const getGoogleAuthTokens = async (code) => {
    const url = "https://oauth2.googleapis.com/token"

    const values = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
        grant_type: "authorization_code",
    }

    const qs = new URLSearchParams(values)

    try {
        const res = await axios.post(url, qs.toString(), {
            Headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        return res.data
    } catch (error) {
        throw new Error(error.message)
    }
}

const getGoogleUser = async (id_token, access_token) => {
    const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
        {
            Headers: {
                Authorization: `Bearer ${id_token}`,
            },
        }
    )

    if(!res){
        console.error(res.error);
        throw new Error('Cannot get Google user.')
    }
    return res.data
}

const createAnonymousUser = async ()=>{

}

module.exports = {
    getGoogleAuthTokens,
    getGoogleUser,
    createAnonymousUser}
