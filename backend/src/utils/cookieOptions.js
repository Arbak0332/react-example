const cookieOptions = {
    maxAge: 3600 * 1000*2, // expires in 2 hours
    sameSite: "none",
    secure: false,
}
module.exports = {
    cookieOptions
}