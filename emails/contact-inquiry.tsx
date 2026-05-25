import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

export interface ContactInquiryEmailProps {
  name: string
  email: string
  phone: string
  description: string
}

export default function ContactInquiryEmail({
  name,
  email,
  phone,
  description,
}: ContactInquiryEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New project inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New contact form submission</Heading>
          <Text style={paragraph}>
            Someone reached out through the Afrinexel website contact form.
          </Text>
          <Hr style={hr} />
          <Section>
            <Text style={label}>Name</Text>
            <Text style={value}>{name}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
            <Text style={label}>Phone</Text>
            <Text style={value}>{phone}</Text>
            <Text style={label}>Project description</Text>
            <Text style={value}>{description}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#faf9f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "32px 24px",
  maxWidth: "560px",
}

const heading = {
  color: "#0f2847",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 16px",
}

const paragraph = {
  color: "#0f2847",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
}

const label = {
  color: "#0a9cab",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  margin: "16px 0 4px",
}

const value = {
  color: "#0f2847",
  fontSize: "15px",
  lineHeight: "22px",
  margin: "0 0 8px",
  whiteSpace: "pre-wrap" as const,
}

const hr = {
  borderColor: "#dbeaf3",
  margin: "24px 0",
}
