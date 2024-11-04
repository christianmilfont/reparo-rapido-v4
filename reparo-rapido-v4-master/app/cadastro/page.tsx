"use client"

import { FormEvent, useState } from 'react';
import styles from '../styles/Cadastro.module.css';

const Cadastro = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Senha:', password);
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Crie sua conta</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Nome</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Senha</label>
                    <input
                        className={styles.input}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.button} type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default Cadastro;
