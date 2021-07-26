export const showStringOrItemIfNotNull = (itemToCheck, itemToRender) => (
    itemToCheck == null ? "" : itemToRender
);