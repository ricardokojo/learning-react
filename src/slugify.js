export const slugify = (str) => {
    return str
        .replace(" ", "-")
        .toLowerCase();
}