export const createExample = () => {};
export const readExample = () => {};
export const readExamples = () => {};
export const updateExample = () => {};
export const deleteExample = () => {};

import {
    getAllExample,
    getOneExample,
    deleteExample,
    createExample,
    updateExample,
} from "../models/menuitems.js";

export const ExampleService = {
    read: async (id) => (await getOneExample({ where: { id } })) || null,
    readAll: async () => (await getAllExample()) || [],
    create: async (id, name, data) =>
        await createExample({
            id,
            name,
            data: typeof data === "string" ? data : JSON.stringify(data),
        }),
    update: async (id, fieldsToUpdate) =>
        await updateExample({ where: { id } }, fieldsToUpdate),
    delete: async (id) => await deleteExample({ where: { id } }),
};



