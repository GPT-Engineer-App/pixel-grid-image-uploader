import { useState } from "react";
import { Container, SimpleGrid, Box, Image, Input } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [images, setImages] = useState(Array(25).fill(null));

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <SimpleGrid columns={5} spacing={2}>
        {images.map((image, index) => (
          <Box key={index} width="25px" height="25px" position="relative" border="1px solid #ccc">
            {image ? <Image src={image} alt={`Uploaded ${index}`} boxSize="25px" objectFit="cover" /> : <Input type="file" accept="image/*" position="absolute" top="0" left="0" width="100%" height="100%" opacity="0" cursor="pointer" onChange={(event) => handleImageUpload(event, index)} />}
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
