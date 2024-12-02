export const toKebabCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with hyphens
    .replace(/^-+|-+$/g, ""); // Trim hyphens from the start and end

export const generateParkUrl = (city, name, id) => `${toKebabCase(city)}/${toKebabCase(name)}-${id}`;
