import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlogContainer = styled(motion.div)`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BlogCard = styled(motion.article)`
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.2)`};
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -10px ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.5)`};
  
    @media (max-width: 768px) {
      transform: translateY(-5px);
    }
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) => `rgba(${theme.backgroundRgba}, 0.1)`};
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

const ReadMore = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Android Development",
    excerpt: "A comprehensive guide to starting your journey in Android app development using Kotlin and Android Studio.",
    image: "https://cdn.dribbble.com/users/1787323/screenshots/17460145/media/ca3e5c1e2caa9ce8a7ce58bbf104c87e.png",
    date: "Jan 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Real-time Chat Applications",
    excerpt: "Learn how to create a real-time chat application using Firebase and modern Android development practices.",
    image: "https://cdn.dribbble.com/users/1615584/screenshots/16969144/media/f7bd21298e7c7e5ef40e8e6d9631bed9.jpg",
    date: "Jan 10, 2024",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Implementing AI in Mobile Apps",
    excerpt: "Explore ways to integrate artificial intelligence features into your mobile applications.",
    image: "https://cdn.dribbble.com/users/1626229/screenshots/15638381/media/05f19e57f90c84b0426d5a0b92d48066.jpg",
    date: "Jan 5, 2024",
    readTime: "6 min read"
  }
];

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <BlogContainer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <PageTitle>Blog</PageTitle>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogImage>
              <img src={post.image} alt={post.title} />
            </BlogImage>
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>
                <span>{post.date} · {post.readTime}</span>
                <ReadMore href="#">Read More →</ReadMore>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;