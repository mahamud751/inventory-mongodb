const Brand = require("../models/Brand");
const Supplier = require("../models/Supplier");

exports.createSupplierService = async (data) => {
  const product = await Supplier.create(data);
  const { _id: supplierId, brand } = product;
  //update Brand

  const res = await Brand.updateOne(
    { _id: brand.id },
    { $push: { suppliers: supplierId } }
  );
  console.log(res);
  return product;
};

exports.getSuppliersService = async () => {
  const suppliers = await Supplier.find({});
  return suppliers;
};

exports.getSupplierByIdService = async (id) => {
  const supplier = await Supplier.findOne({ _id: id });
  return supplier;
};

exports.updateSupplierService = async (id, data) => {
  const result = await Supplier.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
