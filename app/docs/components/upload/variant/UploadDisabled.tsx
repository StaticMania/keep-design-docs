"use client";
import { useState } from "react";
import { Upload } from "~/src";

const UploadDisabled = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload
      onFileChange={handleFileChange}
      file={fileName}
      disabled={true}
      id="disabled_upload"
    />
  );
};

const UploadDisabledCode = `
"use client";
import  { useState } from "react";
import { Upload } from "keep-react";

const UploadDisabled = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return <Upload onFileChange={handleFileChange} file={fileName} disabled={true} id="disabled_upload"/>;
};

export default UploadDisabled;
`;

export { UploadDisabled, UploadDisabledCode };
