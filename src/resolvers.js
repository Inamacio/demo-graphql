import product from './product';

const resolvers = {
  Query: {
    products: () => product.find().lean(),
    product: (_, { id }) => product.findById(id).lean(),
  },
  Mutation: {
    createProduct: (_, { name, price, category }) => product.create({ name, price, category }),
  },
};

export default resolvers;
