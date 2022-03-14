import category from "../models/category";

class categoryController {
    async showAllCategory(req, res, next) {
        try {
            const data = await category.find();
            res.status(200).json({ data: data, success: true });
        } catch (err) {
            res.status(500).json({ message: err, success: false });
        }
    }


    async getCategoryById(req, res, next) {
        try {
            const id = req.query.id;
            const data = await category.findById(id);
            res.status(200).json({ data: data, success: true });
        } catch (err) {
            res.status(500).json({ message: err, success: false });
        }
    }

    async storeCategory(req, res) {
        try{
            const category = new category(req.body);
            const data = await category.save();
            res.status(200).json({ message: "Category added successfully", success: true });
        } catch (err) {
            res.status(500).json({ message: err, success: false });
        }
    }
}

export default categoryController;