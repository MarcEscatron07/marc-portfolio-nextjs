export const sendContactForm = async (data: any) => {
    return fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        }
    })
}