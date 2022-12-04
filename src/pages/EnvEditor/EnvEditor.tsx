import { SuperFileInput } from "@components/molecules";
import React from "react";

const EnvEditor = () => {
  return (
    <div>
      <SuperFileInput acceptedFileTypes=".env, .env.example" />
    </div>
  );
};

export default EnvEditor;
