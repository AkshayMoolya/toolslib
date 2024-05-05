"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";

import { FileIcon } from "lucide-react";

import React from "react";
import { useDropzone } from "react-dropzone";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { getExtension } from "@/lib/get-extension";

import Container from "@/components/shared/container";
import Title from "@/components/shared/title";
import { toast } from "sonner";

const PDFViewer = () => {
  const [mounted, setMounted] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const onDrop = (files: File[]) => setUrl(URL.createObjectURL(files[0]!));
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
    },
    onDropRejected: (files) => {
      files.forEach((file) => {
        const extension = getExtension(file.file.name);
        toast(`${extension} format not supported`);
      });
    },
  });

  React.useEffect(() => setMounted(true), []);

  return (
    <Container className="flex max-w-5xl flex-col items-center justify-center">
      <Title title="PDF Viewer" />

      <div className="my-12 w-full">
        <div
          {...getRootProps()}
          className="hover:bg-muted my-12 flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors duration-300"
        >
          <FileIcon size={48} />
          <input {...getInputProps()} />
          <p>Drag and drop PDF here, or click to select a file</p>
        </div>

        {mounted && url && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div className="my-20 h-[1000px]">
              <Viewer
                fileUrl={url}
                theme={"dark"}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        )}
      </div>
    </Container>
  );
};

export default PDFViewer;
