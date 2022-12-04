import { ImportIcon } from "@components/atoms";
import { useEnqueueSnackbar } from "@hooks/useEnqueueSnackbar";
import { FileInput } from "@styles/EnvEditor/EnvEditorStyle";
import { Text } from "@styles/Text/Text";
import React, { DragEvent, useRef } from "react";

interface SuperFileInputProps {
  acceptedFileTypes: string;
}
const SuperFileInput = ({ acceptedFileTypes }: SuperFileInputProps) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const { error, success } = useEnqueueSnackbar();

  const handleValidFile = (file: File, fileExtension: string) => {
    success(`arquivo selecionado: ${fileExtension}`); // TODO i18n
    // TODO handler do arquivo
  };

  const formatAcceptedTypes = (fileName: string) =>
    fileName.replaceAll(" ", "").split(",");

  const formatFileExtension = (fileExtension: string) => `.${fileExtension}`;

  const validateFileFormat = (file: File) => {
    const fileExtension = file.name.split(".").pop();
    const isAccepted = formatAcceptedTypes(acceptedFileTypes).includes(
      formatFileExtension(fileExtension as string)
    );
    if (fileExtension && isAccepted) {
      handleValidFile(file, fileExtension);
    } else {
      error("arquivo inválido"); // TODO i18n
    }
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateFileFormat(file);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.items[0].getAsFile();
    file && validateFileFormat(file);
  };

  const handleOnDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <FileInput
      onClick={() => fileInput.current?.click()}
      type="empty"
      onDrop={handleDrop}
      onDragOver={handleOnDragOver}
    >
      <ImportIcon />
      <Text size={3} color="primary">
        {/* // TODO i18n */}
        Importar arquivo
      </Text>
      <input
        ref={fileInput}
        accept={acceptedFileTypes}
        style={{ display: "none" }}
        type="file"
        onChange={onSelectFile}
      />
    </FileInput>
  );
};

export default SuperFileInput;
