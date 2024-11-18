"use client"
import { useState } from 'react';
import emailjs from "@emailjs/browser"
import { Container, Title, Form, Label, Input, Textarea, Button } from './styles';


export function Email() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_dexl5gz", "template_dc95nky", templateParams, "4aP3p_bP9U6A8HfXb").then((res) => {
            console.log("Email enviado", res.status, res.text)
            setName('')
            setMessage('')
            setEmail('')
        }, (err) => {
            console.log("Erros: ", err)
        })

    }




    return (
        <Container>
            <Title>Me envie um email</Title>

            <Form className="form" onSubmit={sendEmail}>
                <Label htmlFor="name">
                    Nome
                    <Input
                        id="name"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Label>
                <Label htmlFor="email">
                    E-mail
                    <Input
                        id="email"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Label>
                <Label htmlFor="message" style={{ gridColumn: "span 2" }}>
                    Mensagem
                    <Textarea
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </Label>
                <Button type="submit">Enviar email</Button>
            </Form>



        </Container>
    );
}
