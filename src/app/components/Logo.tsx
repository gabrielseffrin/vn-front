import Image from 'next/image';
import logoImage from '@/app/assets/images/Logo.png';

function Logo () {
  return (
    <div className="flex items-center justify-center h-16">
      <Image src={logoImage} alt="Logo da Empresa" />
    </div>
  );
}
export default Logo;