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

        console.log(response)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.currentTarget
        const name = (form.elements.namedItem('name') as HTMLInputElement).value
        const email = (form.elements.namedItem('email') as HTMLInputElement).value
        const message = (form.elements.namedItem('message') as HTMLInputElement).value

        const content = `**IMIĘ:** ${name}\n**MAIL:** ${email}\n**WIADOMOŚĆ:** ${message}`

        sendWebhook(content)
    }

    return (
        <div className="App">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h1>Bartłomiej Górka</h1>
                    <p>Fotografia wnętrz i nieruchomości</p>
                    <p>Fotografia z drona, zdjęcia z lotu ptaka</p>
                    <p>Polska  |  Bydgoszcz  |  Kujawsko-pomorskie</p>
                    <p>tel. 692 874 682</p>
                    <p>mail: <a href="mailto:baax.gorka@op.pl">baax.gorka@op.pl</a></p>
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
