import {
    getAllMenuItems,
    getOneMenuItems,
    deleteMenuItems,
    createMenuItems,
    updateMenuItems,
} from "../models/menuitems.js";

export const MenuItemsService = {
    read: async (id) => (await getOneMenuItems({ where: { itemId: id }, raw: true})) || null,
    readAll: async () => (await getAllMenuItems()) || [],
    create: async (name, price) =>
        await createMenuItems({
            name,
            price
        }),
    update: async (id, fieldsToUpdate) =>
        await updateMenuItems({ where: { itemId: id } }, fieldsToUpdate),
    delete: async (id) => await deleteMenuItems({ where: { itemId: id } }),
};



