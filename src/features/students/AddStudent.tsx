import {
  Box,
  chakra,
  Button,
  useToast,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FormEvent, useCallback } from 'react';
import { useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { BiUpload } from 'react-icons/bi';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import { addStudentPageBreadcrumbNav } from '../../data/breadcrumbDatas';

const AddStudentPage = () => {
  const [uploadFile, setUploadFile] = useState<FileWithPath[]>();
  const [isFileDragging, setIsFileDragging] = useState(false);
  const textColor = useColorModeValue('gray.800', '#fff');

  const backgroundColor = useColorModeValue(
    isFileDragging ? 'green.100' : '#fff',
    isFileDragging ? 'green.500' : 'gray.800'
  );

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!uploadFile) {
      toast({
        title: 'Please Select a File First',
        description: 'Please select a file to upload',
        status: 'error',
      });
    } else {
      console.log(uploadFile);
    }
  };

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setUploadFile(acceptedFiles);
    setIsFileDragging(false);
  }, []);

  const { getRootProps, acceptedFiles, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsFileDragging(true),
    onDragLeave: () => setIsFileDragging(false),
  });
  const toast = useToast();
  return (
    <Box width={'100%'} height={'100%'}>
      <BreadcrumbNav orderedNavItems={addStudentPageBreadcrumbNav} />
      <VStack width={'100%'} height={`100%`} justifyContent={'center'}>
        <Box
          minH={'400px'}
          padding={'2rem'}
          backgroundColor={backgroundColor}
          marginTop={'1rem'}
          transition={`all 0.3s ease-in-out`}
          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          boxShadow={'0px 0px 24px rgba(0,0,0,0.2)'}
          borderRadius={'14px'}
          maxW={'700px'}
        >
          <chakra.ul>
            {acceptedFiles.map((file, index) => {
              return (
                <chakra.li
                  listStyleType={'none'}
                  fontWeight={'bold'}
                  color={'green'}
                  textDecoration={'underline'}
                  key={index}
                >
                  {file.name}
                </chakra.li>
              );
            })}
          </chakra.ul>
          <chakra.form
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <input {...getInputProps()} />
            <VStack
              {...getRootProps({
                className: 'dropzone',
                onDrop: () => console.log('ehloo'),
              })}
              width={`100%`}
              justifyContent={'center'}
            >
              <BiUpload color={'green'} size={56} />
              {isFileDragging && (
                <chakra.span fontWeight={500} color={textColor}>
                  Yes put it right there!
                </chakra.span>
              )}
              {!isFileDragging && (
                <chakra.span color={textColor}>
                  Drag and Drop or click to
                  <chakra.label
                    cursor={'pointer'}
                    htmlFor="excel_file"
                    fontWeight={'bold'}
                    // color={'green'}
                  >
                    {' '}
                    Browse{' '}
                  </chakra.label>
                </chakra.span>
              )}
            </VStack>
            <Button
              _hover={{
                backgroundColor: `brand.700`,
              }}
              backgroundColor="brand.500"
              color="#fff"
              marginTop={'2rem'}
              padding={'0.5rem 2rem'}
              type={'submit'}
              display={'flex'}
              gap={'0.5rem'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <BiUpload size={24} />
              Upload
            </Button>
          </chakra.form>
        </Box>
      </VStack>
    </Box>
  );
};

export default AddStudentPage;
