import { useState, useEffect } from "react";
import { Container, Heading, VStack, Box, Button, Text } from "@chakra-ui/react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from an API or define them statically
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleEnroll = (courseId) => {
    setEnrolledCourses([...enrolledCourses, courseId]);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <Heading as="h2" size="xl" mb={6}>Available Courses</Heading>
      <VStack spacing={6} width="100%">
        {courses.map((course) => (
          <Box key={course.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{course.title}</Heading>
            <Text mt={4}>{course.description}</Text>
            <Button mt={4} colorScheme="teal" onClick={() => handleEnroll(course.id)}>
              Enroll
            </Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Courses;