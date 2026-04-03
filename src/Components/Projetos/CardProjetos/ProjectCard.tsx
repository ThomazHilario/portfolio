import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/Commons";


// Interface
type ProjectCardProps = {
    homepage: string;
    title: string;
    description: string;
    topics: string[];
    banner: string;
}


export const ProjectCard = ({homepage, title, description, topics, banner}: ProjectCardProps) => {
    return (
        <a href={homepage} className='shadow-[0_20px_40px_-15px_rgba(96,99,238,0.1)]' target='blank'>
            <Card className='text-default-text h-full bg-slate-800/40 group'>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>

                    <CardContent className='gap-2 justify-between'>
                        <CardDescription className="break-normal!">{description}</CardDescription>
                    </CardContent>

                    <CardFooter className='relative border-none mt-auto'>
                        <img className='w-full transition-all duration-500 brightness-50 group-hover:brightness-80 h-60 rounded-lg inset-1 shadow-lg' src={banner} alt="imagem do projeto" />

                         <section className='absolute flex flex-wrap gap-2 bottom-6 left-6'>
                            {
                                topics.map((item,idx) => (
                                        <span key={idx} className='bg-indigo-950/80 backdrop-blur-2xl p-1  rounded-sm'>
                                            {item[0]!.toUpperCase() + item.substring(1)}
                                        </span>
                                    )
                                )
                            }
                        </section>
                    </CardFooter>      
            </Card>
        </a>
    )
}