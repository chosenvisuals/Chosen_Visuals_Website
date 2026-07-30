import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ previewText, children }: EmailLayoutProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logoText}>CHOSEN VISUALS</Text>
          </Section>

          {children}

          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              Chosen Visuals Academy &copy; {new Date().getFullYear()}
            </Text>
            <Text style={footerText}>
              Imagine. Create. Inspire.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailLayout;

const main = {
  backgroundColor: '#0A1128',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: '#ffffff',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#001B60',
  border: '1px solid #0052FF',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  margin: '0 auto',
  padding: '20px',
  maxWidth: '600px',
};

const header = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const logoText = {
  fontSize: '24px',
  fontWeight: 'bold',
  letterSpacing: '2px',
  color: '#F8A328',
  margin: '0',
};

const hr = {
  borderColor: '#F8A328',
  margin: '20px 0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '20px 0',
};

const footerText = {
  color: '#a3a3a3',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '4px 0',
};
