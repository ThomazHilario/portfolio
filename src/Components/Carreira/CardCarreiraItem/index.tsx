import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CarouselItem } from '@/Components/Commons';
import { cn } from '@/utils';

type CardCarreiraItemProps = {
    title: String;
    role: String;
    description: String;
    date: String;
    isActive: Boolean;
}

export const CardCarreiraItem = ({title, role, description, date, isActive}: CardCarreiraItemProps) => {
    return(
        <CarouselItem className='w-105'>
            <Card className={cn(
                'bg-slate-800/40 h-full shadow-[0_20px_40px_-15px_rgba(96,99,238,0.1)] border-2',  
                isActive ? 'border-[#4ae2919a]' : 'border-transparent'
            )}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardTitle className='text-sm font-normal text-indigo-400'>{role}</CardTitle>
                </CardHeader>

                <CardContent className='min-h-24 justify-start'>
                    <CardDescription className='break-normal!'>
                        {description}
                    </CardDescription>
                </CardContent>

                <CardFooter className='border-t-0 justify-end mt-auto'>
                    <h4>{date}</h4>
                </CardFooter>
            </Card>
        </CarouselItem>
    )
}