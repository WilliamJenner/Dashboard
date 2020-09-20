const featherPropsBuilder = (props) => {
    return {
        size: props.size,
    };
};
const smallProps = {
    size: 30,
};
const mediumProps = {
    size: 60
};
const largeProps = {
    size: 90
};
export const SmallFeatherProps = Object.assign({}, featherPropsBuilder(smallProps));
export const MediumFeatherProps = Object.assign({}, featherPropsBuilder(mediumProps));
export const LargeFeatherProps = Object.assign({}, featherPropsBuilder(largeProps));
//# sourceMappingURL=featherProps.js.map