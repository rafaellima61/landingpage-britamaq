import './Form.css';

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const lead = {
            nome: data.get('name'),
            email: data.get('email'),
            contato: data.get('contact'),
        };
        // Aqui você pode enviar o lead para uma API ou salvar localmente
        alert(`Lead gerado!\nNome: ${lead.nome}\nEmail: ${lead.email}\nContato: ${lead.contato}`);
        e.target.reset();
    };

    return (
            <div className='form-container'>
            <div className="form-header">
                <h2>Solicite uma demonstração</h2>
                <p>Preencha o formulário abaixo para receber mais informações.</p>
            </div>

                <form className="lead-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name" required placeholder="Digite seu nome" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" required placeholder="seu@email.com" />
                    </div>
                    <div>
                        <label htmlFor="contact">Contato</label>
                        <input type="tel" id="contact" name="contact" required placeholder="(99) 99999-9999" />
                    </div>
                    <button type="submit">Enviar solicitação</button>
                </form>
            </div>
    );
}

export default Form;