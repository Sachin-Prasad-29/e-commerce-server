const getAllProducts = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Get all Product' });
};
const addProduct = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Add a Product' });
};
const getProductById = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Get a Product' });
};
const editProductById = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Edit a Product' });
};
const deleteProductById = async (req, res) => {
    res.status(200).json({ success: true, msg: 'Delete a Product' });
};

module.exports = {
    getAllProducts,
    addProduct,
    editProductById,
    getProductById,
    deleteProductById,
};
