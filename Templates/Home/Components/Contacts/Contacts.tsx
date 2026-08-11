import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/Components/UI';
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from '@/Components/Commons';

import { SlideIn } from '@/Components/Transitions';
import { CONTACTS_OPTIONS } from '@/Config';

export const Contacts = () => {
  return (
    <SlideIn initial="slideLeft" id="contacts-section">
      <Section>
        <SectionHeader>
          <SectionTitle as="h1">Contatos</SectionTitle>
          <SectionSubtitle as="h2">Entre em contato comigo</SectionSubtitle>
        </SectionHeader>

        <ul className="flex flex-wrap justify-center items-center gap-4">
          {CONTACTS_OPTIONS.map((contact, index) => (
            <li key={`${contact.label}-${index}`}>
              <a className="linkSocial" href={contact.href} target="blank">
                <Card className="flex w-60 h-45 justify-center items-center bg-slate-800/40 text-default-text">
                  <CardHeader>
                    <contact.icon className="text-primary size-10" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="px-0 pr-1 font-semibold text-xs flex justify-center items-center gap-1">
                      {contact.label}
                    </CardTitle>
                  </CardContent>
                  <CardFooter className="border-0 p-0">
                    <CardDescription>{contact.value}</CardDescription>
                  </CardFooter>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </SlideIn>
  );
};
