import {
  Button,
  Heading,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
import EmailLayout from './EmailLayout';

interface WelcomeEmailProps {
  confirmationUrl?: string;
}

export const WelcomeEmail = ({
  confirmationUrl = '{{ .ConfirmationURL }}',
}: WelcomeEmailProps) => {
  return (
    <EmailLayout previewText="Welcome to Chosen Visuals - Confirm your email">
      <Section style={heroSection}>
        <Heading style={h1}>Welcome to the Academy.</Heading>
        <Text style={text}>
          You are one step away from joining a community of creators, designers, and visionaries. 
          To activate your account and start your journey, please verify your email address.
        </Text>
        
        <Section style={buttonContainer}>
          <Button style={button} href={confirmationUrl}>
            Verify Email Address
          </Button>
        </Section>
        
        <Text style={subtext}>
          If you didn't create an account with Chosen Visuals, you can safely ignore this email.
        </Text>
      </Section>
    </EmailLayout>
  );
};

export default WelcomeEmail;

const heroSection = {
  padding: '20px 0',
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0 0 20px',
};

const text = {
  color: '#d4d4d4',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center' as const,
  margin: '0 0 30px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '30px 0',
};

const button = {
  backgroundColor: '#ffffff',
  color: '#000000',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  borderRadius: '4px',
};

const subtext = {
  color: '#737373',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center' as const,
  marginTop: '40px',
};
