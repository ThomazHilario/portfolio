import curriculo from '@/assets/Curriculo Thomaz Hilário.pdf'
import { Dialog, DialogContent, DialogTrigger } from "@/Components/Commons";
import { PDFViewer } from "@/Components/PDFViewer";

export const DialogCV = () => (
    <Dialog>
        <DialogTrigger className='bg-purple rounded-3xl py-2 px-2.5 border border-purple-border text-neutral-300/90 transition-all duration-700 lg:py-2.5 lg:px-5 hover:p-2.5 hover:bg-purple-hover'>
            Download CV
        </DialogTrigger>

        <DialogContent className='min-h-0 min-w-0 w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 flex justify-center items-center'>
            <PDFViewer file={curriculo} />
        </DialogContent>
    </Dialog>
)