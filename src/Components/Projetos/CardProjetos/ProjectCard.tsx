// css
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../Commons/Card';
import { CardFooter } from '../../Commons/Card/CardFooter';

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
        <a href={homepage} className='md:mx-auto shadow-[0_20px_40px_-15px_rgba(96,99,238,0.1)]' target='blank'>
            <Card className='text-default-text bg-slate-800/40 w-64.5 h-95 '>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>

                    <CardContent className='min-h-24 justify-between gap-2'>
                        <CardDescription>{description}</CardDescription>

                        <section className='flex flex-wrap gap-2'>
                            {
                                topics.map((item,idx) => (
                                        <span key={idx} className='bg-indigo-950/50 p-1 text-violet-500 rounded-sm'>
                                            {item[0]!.toUpperCase() + item.substring(1)}
                                        </span>
                                    )
                                )
                            }
                        </section>
                    </CardContent>

                    <CardFooter className='border-none'>
                        <img className='h-42 rounded-lg' src={banner} alt="imagem do projeto" />
                    </CardFooter>      
            </Card>
        </a>
    )
}