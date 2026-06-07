import curriculo from '@/assets/Curriculo Thomaz Hilário.pdf'

export const SocialMedia = () => (
    <section className='text-xs flex items-center gap-2.5 w-full sm:flex-row sm:justify-between'>
        <a href={curriculo} target='_blank' rel="noreferrer" className='bg-[#370f5a] rounded-3xl py-2 px-2.5 border border-[#5f377d] text-[#ffffffd1] transition-all duration-700 lg:py-2.5 lg:px-5 hover:p-2.5 hover:bg-[#6a2f9d]'>Download CV</a>

        <a href='https://api.whatsapp.com/send?phone=5585988274949' target="_blank" rel="noreferrer" className='rounded-3xl py-2 px-2.5 border border-[#5f377d] text-[#ffffffd1] transition-all duration-700 lg:py-2.5 lg:px-5 hover:p-2.5 hover:bg-[#6a2f9d]'>Entrar em Contato</a>
    </section>
)