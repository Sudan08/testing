import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FileWithPath, useDropzone } from 'react-dropzone';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  chakra,
  useColorModeValue,
  useDisclosure,
  Box,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction, useCallback, useMemo } from 'react';

const FilePreviewComponent: React.FC<{ acceptedFiles: FileWithPath[] }> = ({
  acceptedFiles,
}) => (
  <>
    {acceptedFiles.map((file) => (
      <chakra.li color={'green.600'} fontWeight={500} key={file.path}>
        {file.path} - {file.size} bytes
      </chakra.li>
    ))}
  </>
);

type uploadByExcelPropsType = {
  uploadFile: boolean;
  setUploadFile: Dispatch<SetStateAction<boolean>>;
};

const UploadByExcelFile: FC<uploadByExcelPropsType> = ({
  uploadFile,
  setUploadFile,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const isFileDragging = useMemo(() => isOpen, [isOpen]);
  const backgroundColor = useColorModeValue(
    isFileDragging ? 'green.100' : '#fff',
    isFileDragging ? 'green.500' : 'gray.800'
  );
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, acceptedFiles, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: onToggle,
    onDragLeave: onToggle,
  });
  return (
    <Modal isCentered isOpen={uploadFile} onClose={() => setUploadFile(false)}>
      <ModalOverlay />
      <ModalContent backgroundColor={backgroundColor}>
        <ModalHeader>Upload File</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          // {...getRootProps}
          display={'flex'}
          gap={'0.5rem'}
          justifyContent={'flex-start'}
          className="container"
        >
          <Box
            {...getRootProps({
              className: 'dropzone',
            })}
            width={'100%'}
          >
            <input {...getInputProps()} onChange={(e) => console.log(e)} />
            <HStack width={`100%`} justifyContent={'center'}>
              <AiOutlineCloudUpload size={24} />
              <chakra.span>
                Drag and Drop or click to
                <chakra.label
                  cursor={'pointer'}
                  htmlFor="excel_file"
                  color={'green'}
                >
                  {' '}
                  Browse{' '}
                </chakra.label>
              </chakra.span>
            </HStack>
            <Divider />
            <chakra.aside
              display={'flex'}
              flexDir={'column'}
              alignItems={'flex-start'}
              pb={'0.5rem'}
            >
              <chakra.h2
                fontWeight={700}
                fontSize={'1.2rem'}
                color={'green.600'}
                marginTop={'0.5rem'}
              >
                File
              </chakra.h2>
              <chakra.span>
                {acceptedFiles.length === 0 && 'No file yet!'}
              </chakra.span>
              <chakra.ul>
                <FilePreviewComponent acceptedFiles={acceptedFiles} />
              </chakra.ul>
            </chakra.aside>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default UploadByExcelFile;
