const { object, number, string } = require('zod');

const payload = { 
    body: object({
        title: string({
            required_error: "Title is required"
        }),
        description: string({
            required_error: "Description is required"
        }).min(120, "Description should be at least 120 characters long"),
        price: number({
            required_error: "Price is required"
        }),
        image: string({
            required_error: "Image is required"
        })
    })
}

const params = {
    params: object({
        productId: string({
            required_error: "productId is required"
        })
    })
}

const createProductSchema = object({
    ...payload
})

const updateProductSchema = object({
    ...payload,
    ...params
})

const deleteProductSchema = object({
    ...params
})

const getProductSchema = object({
    ...params
})

module.exports = { createProductSchema, updateProductSchema, deleteProductSchema, getProductSchema };
