export const database = ["apples", "oranges", "bananas"]

export default defineEventHandler(async (event) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
        return { database }
})