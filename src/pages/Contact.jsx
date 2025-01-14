import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid ${({ theme }) => theme.secondary}40;
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid ${({ theme }) => theme.secondary}40;
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;
  
  span {
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/abhishek-maurya576'
    },
    {
      name: 'LinkedIn',
      icon: '👔',
      url: 'https://www.linkedin.com/in/abhishekmaurya9118'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/b_for_bca'
    }
  ];

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </Title>
      
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </Form>

      <SocialLinks>
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <span>{link.icon}</span>
            {link.name}
          </SocialLink>
        ))}
      </SocialLinks>
    </ContactContainer>
  );
};

export default Contact; 