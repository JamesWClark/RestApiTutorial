const { createProduct, findProduct, findAndUpdateProduct, deleteProduct } = require("../service/product.service");


async function createProductHandler(req, res) {
    const userId = res.locals.user._id;
    const body = req.body;
    const product = await createProduct({ ...body, user: userId });

    return res.send(product);
}

async function getProductHandler(req, res) {
    const productId = req.params.productId;
    const product = await findProduct({ productId });

    if(!product) return res.sendStatus(404);

    return res.send(product);
}

async function updateProductHandler(req, res) {
    const userId = res.locals.user._id;
    const productId = req.params.productId;
    const update = req.body;

    const product = await findProduct({ productId });

    if(!product) return res.sendStatus(400);

    if(String(product.user) !== userId) {
        return res.sendStatus(403);
    }

    const updateProduct = await findAndUpdateProduct({ productId }, update, { new: true });

    return res.send(updateProduct);
}

async function deleteProductHandler(req, res) {
    const userId = res.locals.user._id;
    const productId = req.params.productId;

    const product = await findProduct({ productId });

    if(!product) return res.sendStatus(404);

    if(String(product.user) !== userId) {
        return res.sendStatus(403);
    }

    await deleteProduct({ productId });

    return res.sendStatus(200);
}

module.exports = { createProductHandler, getProductHandler, updateProductHandler, deleteProductHandler };