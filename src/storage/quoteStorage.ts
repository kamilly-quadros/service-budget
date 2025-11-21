import { QuoteStatus } from "@/types/Status"
import AsyncStorage from "@react-native-async-storage/async-storage"

const QUOTE_STORAGE_KEY = "@quotes:storage"
export type QuoteItem = {
    id: string
    title: string
    client: string
    items: {
        id: number
        title: string
        description: string
        price: number
        quantity: number
    }[]
    discountPct: number
    status: QuoteStatus
    createdAt: string
    updatedAt: string
}
async function get(): Promise<QuoteItem[]> {
    try {
        const storage = await AsyncStorage.getItem(QUOTE_STORAGE_KEY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("QUOTE_GET: " + error)
    }
}
async function getById(id: string): Promise<QuoteItem | null> {
    try {
        const quotes = await get()
        const found = quotes.find((item) => item.id === id)
        return found || null
    } catch (error) {
        throw new Error("QUOTE_GET_BY_ID: " + error)
    }
}
async function save(items: QuoteItem[]): Promise<void> {
    try {
        await AsyncStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
        throw new Error("QUOTE_SAVE: " + error)
    }
}
async function add(newQuote: QuoteItem): Promise<QuoteItem[]> {
    const quotes = await get()
    const updated = [...quotes, newQuote]
    await save(updated)
    return updated
}
export const quoteStorage = { get,getById, save, add, }
