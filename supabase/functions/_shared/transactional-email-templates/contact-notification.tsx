import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Nkosi Group"

interface ContactNotificationProps {
  name?: string
  email?: string
  company?: string
  message?: string
}

const ContactNotificationEmail = ({ name, email, company, message }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={label}>Name</Text>
        <Text style={value}>{name || '(not provided)'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || '(not provided)'}</Text>
        <Text style={label}>Company</Text>
        <Text style={value}>{company || '(not provided)'}</Text>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Text style={value}>{message || '(no message)'}</Text>
        <Hr style={hr} />
        <Text style={footer}>This message was sent via the {SITE_NAME} website contact form.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => `New message from ${data.name || 'a visitor'}`,
  displayName: 'Contact form notification',
  to: 'arnold.n@nkosigroup.net',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', company: 'Acme Inc', message: 'I would like to discuss a project with your team.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 28px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a1f2e', margin: '0 0 24px' }
const label = { fontSize: '11px', fontWeight: '600' as const, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '16px 0 4px' }
const value = { fontSize: '15px', color: '#1a1f2e', lineHeight: '1.5', margin: '0 0 8px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#9ca3af', margin: '24px 0 0' }
