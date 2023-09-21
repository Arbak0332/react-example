const Address = require("../../utils/database/models/address")
const { StatusCodes } = require("http-status-codes")
const { NotFoundError, BadRequestError } = require("../../utils/error")

// POST /addresses
async function createAddress(req, res) {
    const { street, city, state, zip, country } = req.body

    const newAddress = await Address.query().insert({
        street,
        city,
        state,
        zip,
        country,
    })

    res.status(StatusCodes.CREATED).json(newAddress)
}

// GET /addresses/:id
async function getAddressById(req, res) {
    const { id } = req.params

    const address = await Address.query().findById(id)

    if (!address) {
        throw new NotFoundError(`Address with id ${id} not found`)
    }

    res.status(StatusCodes.OK).json(address)
}

// GET /addresses
async function getAllAddresses(req, res) {
    const addresses = await Address.query()

    res.status(StatusCodes.OK).json(addresses)
}

// PUT /addresses/:id
async function updateAddress(req, res) {
    const { id } = req.params
    const { street, city, state, zip, country } = req.body

    const updatedAddress = await Address.query().patchAndFetchById(id, {
        street,
        city,
        state,
        zip,
        country,
    })

    if (!updatedAddress) {
        throw new NotFoundError(`Address with id ${id} not found`)
    }

    res.status(StatusCodes.OK).json(updatedAddress)
}

// DELETE /addresses/:id
async function deleteAddress(req, res) {
    const { id } = req.params

    const numDeleted = await Address.query().deleteById(id)

    if (numDeleted === 0) {
        throw new NotFoundError(`Address with id ${id} not found`)
    }

    res.sendStatus(StatusCodes.NO_CONTENT)
}

module.exports = {
    createAddress,
    getAddressById,
    getAllAddresses,
    updateAddress,
    deleteAddress,
}
