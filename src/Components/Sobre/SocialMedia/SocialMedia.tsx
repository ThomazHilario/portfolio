import { DialogCV } from "./DialogCV";

export const SocialMedia = () => (
    <section className='text-xs flex items-center gap-2.5 w-full sm:flex-row sm:justify-between'>

        <DialogCV />

        <a href='https://api.whatsapp.com/send?phone=5585988274949' target="_blank" rel="noreferrer" className='rounded-3xl py-2 px-2.5 border border-purple-border text-neutral-300/90 transition-all duration-700 lg:py-2.5 lg:px-5 hover:p-2.5 hover:bg-purple-hover'>Entrar em Contato</a>
    </section>
)