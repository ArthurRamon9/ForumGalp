import React from 'react';
import { Areacadastro, Cadastro1, Form } from './Style'

function Cadastro() {
    return (

        <Areacadastro>
            <Cadastro1>
                <Form>
                    <div className="title">
                        <h1>CADASTRO</h1>
                    </div>
                    <input
                        type="text"
                        name="nomecompleto"
                        placeholder=" Nome Completo"
                        autoFocus
                    />
                    <input type="text" name="email" placeholder="Email" autoFocus />
                    <input type="password" name="senha" placeholder=" Senha" />
                    <input
                        type="password"
                        name="confirmesenha"
                        placeholder=" Confirmação da Senha"
                    />
                    <button type="submit" value="Finalizar" id="botao" />
                </Form>
            </Cadastro1>
        </Areacadastro>
    )
}

export default Cadastro;
