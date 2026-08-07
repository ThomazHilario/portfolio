import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle, 
    CarouselItem 
} from '@/Components/UI';

import { cn } from '@/Utils';

type CardCarrerItemProps = {
    title: String;
    role: String;
    description: String;
    date: String;
    isActive: Boolean;
}

export const CardCarrerItem = ({ title, role, description, date, isActive }: CardCarrerItemProps) => {
    return(
        <CarouselItem className='w-105'>
            <Card className={cn(
                'bg-slate-800/40 h-full border-2',  
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