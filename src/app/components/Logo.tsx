import Image from 'next/image'; // Importa o componente de imagem do Next.js
import logoImage from '@/app/assets/images/Logo.png'; // Caminho para sua imagem

function Logo () {
  return (
    <div className="flex items-center justify-center h-16">
      {/* Usando o componente Image do Next.js */}
      <Image src={logoImage} alt="Logo da Empresa" />
    </div>
  );
}
export default Logo;