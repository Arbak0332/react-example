const { Model } = require("objection")
const knex = require("../knexfile")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
Model.knex(knex)

class User extends Model {
    static get tableName() {
        return "user"
    }

    mapToUserWithLowPrivileges() {
        console.log(this)
    }
    mapToOwner() {}
    mapToUserWithHighPriviliges() {}

    isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailPattern.test(email)
    }

    async $beforeInsert(queryContext) {
        await super.$beforeInsert(queryContext)

        if (!this.isValidEmail(this.email)) return

        if (!this.password) return
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
    }
    createJWT() {
        return jwt.sign(
            {
                id: this.id,
                first_name: this.first_name,
                last_name: this.last_name,
                order_id: null,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
        )
    }
    setOrderId(oldToken, order_id) {
        const decodedToken = jwt.decode(oldToken, { complete: true })
        decodedToken.payload.order_id = order_id
        console.log(decodedToken)
        return jwt.sign(decodedToken.payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES,
        })
    }

    async comparePassword(password) {
        const isMatch = await bcrypt.compare(password, this.password)
        return isMatch
    }
}
module.exports = User
