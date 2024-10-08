import React from 'react'
import './App.css'
import './Contact.css'
import Sidebar from './components/sidebar'

const webhookUrl = "https://discord.com/api/webhooks/1264181904236613692/sfB9_lXuNlu-XPOH5JKteJ6Iov3fcUp9rvQ9H-ktw5Wkn5UTToJmbTPaJkmLrHGgZi25"

function Contact() {
    const sendWebhook = async (content: string) => {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content
            })
        })

        return response.status
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const name = (form.elements.namedItem('name') as HTMLInputElement)
        const email = (form.elements.namedItem('email') as HTMLInputElement)
        const message = (form.elements.namedItem('message') as HTMLInputElement)

        const content = `**IMIĘ:** ${name.value}\n**MAIL:** ${email.value}\n**WIADOMOŚĆ:** ${message.value}`

        const status = await sendWebhook(content)
        if (status === 204) {
            alert("Wiadomość została wysłana!")
            form.reset()
        } else {
            alert("Wystąpił błąd podczas wysyłania wiadomości!")
        }
    }

    return (
        <div className="App">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <div>
                        <h1>KONTAKT</h1>
                    </div>
                    <div>
                        <h2>Bartłomiej Górka</h2>
                        <p>Fotografia wnętrz i nieruchomości</p>
                        <p>Fotografia z drona, zdjęcia z lotu ptaka</p>
                        <p>Polska  |  Bydgoszcz  |  Kujawsko-pomorskie</p>
                        <p>tel. <a href="tel:692874682">692 874 682</a></p>
                        <p>mail: <a href="mailto:baax.gorka@op.pl">baax.gorka@op.pl</a></p>
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">IMIĘ</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">MAIL</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">WIADOMOŚĆ</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">WYŚLIJ</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
