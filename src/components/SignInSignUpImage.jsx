import Image from 'next/image';

export default function signInSignUpImage() {
    return (
        
        <Image className='size-full'
            src={"/img/signInSignUpImage.jpg"}
            alt='Imagem de um calendário'
            height={1500}
            width={750}
        />
    )
}