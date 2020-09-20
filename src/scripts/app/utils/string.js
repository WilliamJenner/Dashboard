export const CapitaliseIndex = (str, index) => {
    if (index > 0) {
        return (str.slice(0, index - 1) +
            str.charAt(index).toUpperCase() +
            str.slice(index + 1));
    }
    else {
        return str.charAt(index).toUpperCase() + str.slice(index + 1);
    }
};
export const CapitaliseFirst = (str) => {
    return CapitaliseIndex(str, 0);
};
export const GetDisplayName = (key) => {
    switch (key) {
        case "rubbish":
            return "Rubbish";
        case "foodWaste":
            return "Food Waste";
        case "recycling":
            return "Recycling";
    }
    return "";
};
//# sourceMappingURL=string.js.map