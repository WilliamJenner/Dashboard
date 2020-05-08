interface IGenericFeatherProps {
    size: number;
}

const featherPropsBuilder = (props: IGenericFeatherProps) => {
    return {
        size: props.size,
    }
}

const smallProps: IGenericFeatherProps = {
    size: 30,
}

const mediumProps: IGenericFeatherProps = {
    size: 60
}

const largeProps: IGenericFeatherProps = {
    size: 90
}

export const SmallFeatherProps = {
    ...featherPropsBuilder(smallProps)
}

export const MediumFeatherProps = {
    ...featherPropsBuilder(mediumProps)
}

export const LargeFeatherProps = {
    ...featherPropsBuilder(largeProps)
}