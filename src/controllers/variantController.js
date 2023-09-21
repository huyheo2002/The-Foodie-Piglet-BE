import variantServices from "../services/variantServices"

const handleFindVariantWithIdCompact = async (req, res) => {
    let id = req.query.id;
    let variantInProduct = await variantServices.findVariantWithIdCompact(id)

    return res.status(200).json({
        errCode: 0,
        errMsg: "Ok",
        variant: variantInProduct
    })
}

module.exports = {
    handleFindVariantWithIdCompact: handleFindVariantWithIdCompact
}