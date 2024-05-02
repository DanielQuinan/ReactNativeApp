class BookRepository {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        return await this.model.find();
    }

    async create(data) {
        const book = new this.model(data);
        return await book.save();
    }

    async findById(id) {
        return await this.model.findById(id);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

module.exports = BookRepository;