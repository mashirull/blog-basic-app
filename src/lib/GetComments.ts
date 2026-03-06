import type { Comment } from "../types/types"

export const getComments = (): Comment[] => {
    try {
        const raw = localStorage.getItem("comments")
        if (!raw) {
            return []
        }
        const parsed = JSON.parse(raw)
        return Array.isArray(parsed) ? parsed : []
    } catch (e) {
        return []
    }
}