import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Avatar from '../componentes/avatar'
import Botao from '../componentes/botao'
import { UploadImagem } from '../componentes/uploadImagem'
import { useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [imagem, setImagem] = useState(null);
  const referenciaInput = useRef(null);

  return (
    <>
      <h1>Olá Mundo!</h1>
      <button onClick={() => referenciaInput?.current?.click()}>Abrir Seletor de Arquivos</button>
      <UploadImagem 
        setImagem={setImagem} 
        imagemPreview={imagem?.preview} 
        aoSetarReferencia = {(ref) => referenciaInput.current = ref}
      />
      <div style={{width: 200}}>
        <Avatar />
        <Botao texto={'Login'} cor='invertido' manipularClick={() => console.log('Botão Clicado')} />
      </div >
    </>
  )
}
