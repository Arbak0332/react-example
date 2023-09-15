const cookieOptions = {
    maxAge: 3600 * 1000, // expires in 1 hour
    sameSite: "none",
    secure: false,
}
module.exports = {
    cookieOptions
}