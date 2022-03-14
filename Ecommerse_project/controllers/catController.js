import Cart from "../models/cart";

class cartController {
    getCartByUserId(req, res, next) {
        const id = req.query?.userId;
        Cart.findOne({ userId: userId }).then((data) => {
            res.status(500).json({ message: data, success: true });
        })
        .catch((err) => {
            res.status(500).json({ message: err, success: false });
        });
    }


    storeCart(req, res) {
    const { userId, productId } = req.body;
    const cart = new Cart({
        userId: userId,
        productId: productId,
    });
    cart
        .save()
        .then((result) => {
            res.status(200).json({ message: "Cart added successfully", success: true });
        })
        .catch((err) => {
            res.status(500).json({ message: err, success: false });
        });
    }
}

export default cartController;