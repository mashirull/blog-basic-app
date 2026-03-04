export const formatDate = (date : string) => {
    const formatedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    })

    return formatedDate
}