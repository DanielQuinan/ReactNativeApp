class UserRepository {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        return await this.model.find();
    }

    async create(data) {
        const user = new this.model(data);
        return await user.save();
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

module.exports = UserRepository;